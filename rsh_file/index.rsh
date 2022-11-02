'reach 0.1';


export const admissions = Reach.App(() => {
  const University = Participant('University', {
    university : Address,
    price : UInt,
    getAmount : Fun([],UInt),
    numberOfStudents : UInt,
    deadline : UInt,
    startAdmissions : Fun([],Bool),
    courseNFT : Token,
    notifyStudent : Fun([Bool, Token],Null),
    admissionCompleted:Fun([Address],Null)
  });
  const Student = API('Student', {
    applyForCourse : Fun([Address, Address, UInt],Bool),
    timesUp: Fun([], Bool),
  });

  const certificate = View('courseCertificate', { 
    student : Address,
    university : Address,
    courseNft : Token
   })
  
  init();
  // The first one to publish deploys the contract
  University.only(() => {
    const university = declassify(interact.university);
    const startAdmission = declassify(interact.startAdmissions());
    const numberOfStudents = declassify(interact.numberOfStudents);
    const price = declassify(interact.price);
    const amt = declassify(interact.getAmount());
    const deadline = declassify(interact.deadline);
    const courseNFT = declassify(interact.courseNFT)
    check(price != 0);
    check(numberOfStudents > 0);
    check(amt != 0);
  });

  University.publish(university,startAdmission, price, courseNFT, amt, numberOfStudents, deadline)
  
  commit();

  if(startAdmission){
    University.interact.notifyStudent(startAdmission, courseNFT);
  }

  University.pay([[ numberOfStudents * amt, courseNFT ]]);
  
  const end = lastConsensusTime() + deadline;
  const applicants = new Set();
  assert(balance( courseNFT ) == numberOfStudents * amt, "balance of NFT is wrong");

  const [ keepwaiting , students, lastStudent, lastUniversity, nftId ] = 
  parallelReduce([ startAdmission, numberOfStudents, University, university, courseNFT ])
    .define(() => {
      certificate.student.set(lastStudent);
      certificate.university.set(lastUniversity);
      certificate.courseNft.set(nftId);
    })
    .invariant( balance(courseNFT) == students * amt, "Insufficient Balance")
    .invariant( balance() == price * applicants.Map.size(), "Balances do not match" )
    .invariant( university == lastUniversity, "Univeristy does not match")
    .while(keepwaiting && students > 0)
    .api_(Student.applyForCourse, (who, studentUniversity, courseFee) => {
        check(university == studentUniversity, "Applying for wrong university");
        check( !applicants.member(who) == true, "Application is processed before ")
        check( price == courseFee, "Price and courseFee does not match")
        check( who != University , "University can not be a student")
        return [ courseFee , (k) => {
            k(true);
            applicants.insert(who);
            transfer(amt, courseNFT).to(who);
            University.interact.admissionCompleted(who);
            return [ (students - 1) > 0 , students - 1, this, studentUniversity, courseNFT ]
        }];
    })
    .timeout( absoluteTime(end), () => {
      const [ [], k ] = call(Student.timesUp);
      k(true);
      return [ false, students, lastStudent, lastUniversity, nftId ];
    });
  
    transfer(balance(courseNFT), courseNFT).to(university);
    transfer(balance()).to(university);
    commit();
  // write your program here
  exit();
});
