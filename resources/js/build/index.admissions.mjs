// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc1]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  const courseCertificate_courseNft = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v600, v601, v602, v603, v604, v605, v606, v607, v608, v612] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v600, v601, v603, v604, v605, v628, v634, v641, v642] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v600, v601, v603, v604, v605, v628, v634, v700, v706, v719, v754] = svs;
      return (await ((async () => {
        
        
        return v604;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const courseCertificate_student = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v600, v601, v602, v603, v604, v605, v606, v607, v608, v612] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v600, v601, v603, v604, v605, v628, v634, v641, v642] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v600, v601, v603, v604, v605, v628, v634, v700, v706, v719, v754] = svs;
      return (await ((async () => {
        
        
        return v700;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const courseCertificate_university = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v600, v601, v602, v603, v604, v605, v606, v607, v608, v612] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v600, v601, v603, v604, v605, v628, v634, v641, v642] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v600, v601, v603, v604, v605, v628, v634, v700, v706, v719, v754] = svs;
      return (await ((async () => {
        
        
        return v706;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      courseCertificate: {
        courseNft: {
          decode: courseCertificate_courseNft,
          ty: ctc3
          },
        student: {
          decode: courseCertificate_student,
          ty: ctc0
          },
        university: {
          decode: courseCertificate_university,
          ty: ctc0
          }
        }
      },
    views: {
      1: [ctc0, ctc0, ctc1, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc5],
      4: [ctc0, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc5, ctc2],
      5: [ctc0, ctc0, ctc2, ctc3, ctc2, ctc2, ctc2, ctc0, ctc0, ctc2, ctc5]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function _Student_applyForCourse4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Student_applyForCourse4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Student_applyForCourse4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v600, v601, v603, v604, v605, v628, v634, v641, v642] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc2, ctc3, ctc4, ctc3, ctc3, ctc3, ctc7, ctc3]);
  const v665 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)'],
    msg: 'in',
    who: 'Student_applyForCourse'
    });
  const v666 = v665[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v667 = v665[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v668 = v665[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v672 = stdlib.addressEq(v601, v667);
  stdlib.assert(v672, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:69:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)'],
    msg: 'Applying for wrong university',
    who: 'Student_applyForCourse'
    });
  const v674 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v666), null);
  const v675 = {
    None: 0,
    Some: 1
    }[v674[0]];
  const v676 = stdlib.eq(v675, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v677 = v676 ? false : true;
  stdlib.assert(v677, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:70:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)'],
    msg: 'Application is processed before ',
    who: 'Student_applyForCourse'
    });
  const v680 = stdlib.eq(v603, v668);
  stdlib.assert(v680, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)'],
    msg: 'Price and courseFee does not match',
    who: 'Student_applyForCourse'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v600, v601, v603, v604, v605, v628, v634, v641, v642, v665],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v668, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v701], secs: v703, time: v702, didSend: v414, from: v700 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Student_applyForCourse"
        });
      const v705 = v701[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '0')];
      const v706 = v701[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '1')];
      const v707 = v701[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '2')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v705), null);
      const v719 = stdlib.safeAdd(v642, v707);
      sim_r.txns.push({
        amt: v707,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v736 = true;
      const v737 = await txn1.getOutput('Student_applyForCourse', 'v736', ctc5, v736);
      
      await stdlib.simMapSet(sim_r, 0, v705, null);
      const v746 = v641[stdlib.checkedBigNumberify('./index.rsh:76:40:application', stdlib.UInt_max, '0')];
      const v747 = v746[stdlib.checkedBigNumberify('./index.rsh:76:40:application', stdlib.UInt_max, '0')];
      const v751 = stdlib.safeSub(v747, v605);
      const v753 = stdlib.Array_set(v746, '0', v751);
      const v754 = stdlib.Array_set(v641, stdlib.checkedBigNumberify('./index.rsh:76:40:application', stdlib.UInt_max, '0'), v753);
      sim_r.txns.push({
        kind: 'from',
        to: v705,
        tok: v604
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc3, ctc4, ctc3, ctc3, ctc3, ctc7, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v701], secs: v703, time: v702, didSend: v414, from: v700 } = txn1;
  undefined /* setApiDetails */;
  const v705 = v701[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '0')];
  const v706 = v701[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '1')];
  const v707 = v701[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '2')];
  const v708 = stdlib.addressEq(v601, v706);
  stdlib.assert(v708, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:69:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)'],
    msg: 'Applying for wrong university',
    who: 'Student_applyForCourse'
    });
  const v710 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v705), null);
  const v711 = {
    None: 0,
    Some: 1
    }[v710[0]];
  const v712 = stdlib.eq(v711, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v713 = v712 ? false : true;
  stdlib.assert(v713, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:70:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)'],
    msg: 'Application is processed before ',
    who: 'Student_applyForCourse'
    });
  const v716 = stdlib.eq(v603, v707);
  stdlib.assert(v716, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)'],
    msg: 'Price and courseFee does not match',
    who: 'Student_applyForCourse'
    });
  const v719 = stdlib.safeAdd(v642, v707);
  ;
  const v736 = true;
  const v737 = await txn1.getOutput('Student_applyForCourse', 'v736', ctc5, v736);
  if (v414) {
    stdlib.protect(ctc0, await interact.out(v701, v737), {
      at: './index.rsh:68:11:application',
      fs: ['at ./index.rsh:68:11:application call to [unknown function] (defined at: ./index.rsh:68:11:function exp)', 'at ./index.rsh:74:14:application call to "k" (defined at: ./index.rsh:73:34:function exp)', 'at ./index.rsh:73:34:application call to [unknown function] (defined at: ./index.rsh:73:34:function exp)'],
      msg: 'out',
      who: 'Student_applyForCourse'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v705, null);
  const v746 = v641[stdlib.checkedBigNumberify('./index.rsh:76:40:application', stdlib.UInt_max, '0')];
  const v747 = v746[stdlib.checkedBigNumberify('./index.rsh:76:40:application', stdlib.UInt_max, '0')];
  const v751 = stdlib.safeSub(v747, v605);
  const v753 = stdlib.Array_set(v746, '0', v751);
  const v754 = stdlib.Array_set(v641, stdlib.checkedBigNumberify('./index.rsh:76:40:application', stdlib.UInt_max, '0'), v753);
  ;
  return;
  
  
  
  };
export async function _Student_timesUp4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Student_timesUp4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Student_timesUp4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v600, v601, v603, v604, v605, v628, v634, v641, v642] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc2, ctc3, ctc4, ctc3, ctc3, ctc3, ctc7, ctc3]);
  const v766 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:82:7:application',
    fs: ['at ./index.rsh:82:7:application call to [unknown function] (defined at: ./index.rsh:82:7:function exp)', 'at ./index.rsh:81:37:application call to [unknown function] (defined at: ./index.rsh:81:37:function exp)'],
    msg: 'in',
    who: 'Student_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v600, v601, v603, v604, v605, v628, v634, v641, v642, v766],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v768], secs: v770, time: v769, didSend: v522, from: v767 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Student_timesUp"
        });
      ;
      const v771 = true;
      const v772 = await txn1.getOutput('Student_timesUp', 'v771', ctc5, v771);
      
      const v1071 = v641[stdlib.checkedBigNumberify('./index.rsh:87:21:application', stdlib.UInt_max, '0')];
      const v1072 = v1071[stdlib.checkedBigNumberify('./index.rsh:87:21:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v601,
        tok: v604
        });
      sim_r.txns.push({
        kind: 'from',
        to: v601,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v604
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc3, ctc4, ctc3, ctc3, ctc3, ctc7, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v768], secs: v770, time: v769, didSend: v522, from: v767 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v771 = true;
  const v772 = await txn1.getOutput('Student_timesUp', 'v771', ctc5, v771);
  stdlib.protect(ctc0, await interact.out(v768, v772), {
    at: './index.rsh:82:7:application',
    fs: ['at ./index.rsh:82:7:application call to [unknown function] (defined at: ./index.rsh:82:7:function exp)', 'at ./index.rsh:83:8:application call to "k" (defined at: ./index.rsh:82:7:function exp)', 'at ./index.rsh:81:37:application call to [unknown function] (defined at: ./index.rsh:81:37:function exp)'],
    msg: 'out',
    who: 'Student_timesUp'
    });
  
  const v1071 = v641[stdlib.checkedBigNumberify('./index.rsh:87:21:application', stdlib.UInt_max, '0')];
  const v1072 = v1071[stdlib.checkedBigNumberify('./index.rsh:87:21:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  };
export async function University(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for University expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for University expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3, ctc2]);
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v578 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v579 = [v578];
  const v583 = stdlib.protect(ctc2, interact.deadline, 'for University\'s interact field deadline');
  const v584 = stdlib.protect(ctc2, interact.numberOfStudents, 'for University\'s interact field numberOfStudents');
  const v585 = stdlib.protect(ctc2, interact.price, 'for University\'s interact field price');
  const v586 = stdlib.protect(ctc3, interact.university, 'for University\'s interact field university');
  
  const v589 = stdlib.protect(ctc4, await interact.startAdmissions(), {
    at: './index.rsh:30:63:application',
    fs: ['at ./index.rsh:28:18:application call to [unknown function] (defined at: ./index.rsh:28:22:function exp)'],
    msg: 'startAdmissions',
    who: 'University'
    });
  const v590 = stdlib.protect(ctc2, await interact.getAmount(), {
    at: './index.rsh:33:46:application',
    fs: ['at ./index.rsh:28:18:application call to [unknown function] (defined at: ./index.rsh:28:22:function exp)'],
    msg: 'getAmount',
    who: 'University'
    });
  const v591 = stdlib.protect(ctc5, await interact.getCourseNFT(), {
    at: './index.rsh:35:55:application',
    fs: ['at ./index.rsh:28:18:application call to [unknown function] (defined at: ./index.rsh:28:22:function exp)'],
    msg: 'getCourseNFT',
    who: 'University'
    });
  const v592 = stdlib.eq(v585, stdlib.checkedBigNumberify('./index.rsh:36:20:decimal', stdlib.UInt_max, '0'));
  const v593 = v592 ? false : true;
  stdlib.assert(v593, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:36:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:28:18:application call to [unknown function] (defined at: ./index.rsh:28:22:function exp)'],
    msg: null,
    who: 'University'
    });
  const v595 = stdlib.gt(v584, stdlib.checkedBigNumberify('./index.rsh:37:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v595, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:37:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:28:18:application call to [unknown function] (defined at: ./index.rsh:28:22:function exp)'],
    msg: null,
    who: 'University'
    });
  const v597 = stdlib.eq(v590, stdlib.checkedBigNumberify('./index.rsh:38:18:decimal', stdlib.UInt_max, '0'));
  const v598 = v597 ? false : true;
  stdlib.assert(v598, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:28:18:application call to [unknown function] (defined at: ./index.rsh:28:22:function exp)'],
    msg: null,
    who: 'University'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v586, v589, v585, v591, v590, v584, v583],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc4, ctc2, ctc5, ctc2, ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v601, v602, v603, v604, v605, v606, v607], secs: v609, time: v608, didSend: v91, from: v600 } = txn1;
      
      const v610 = v579[stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '0')];
      const v611 = stdlib.Array_set(v610, '0', stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '0'));
      const v612 = stdlib.Array_set(v579, stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '0'), v611);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v604
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4, ctc2, ctc5, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v601, v602, v603, v604, v605, v606, v607], secs: v609, time: v608, didSend: v91, from: v600 } = txn1;
  const v610 = v579[stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '0')];
  const v611 = stdlib.Array_set(v610, '0', stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '0'));
  const v612 = stdlib.Array_set(v579, stdlib.checkedBigNumberify('./index.rsh:41:14:dot', stdlib.UInt_max, '0'), v611);
  ;
  ;
  if (v602) {
    stdlib.protect(ctc0, await interact.notifyStudent(true), {
      at: './index.rsh:46:38:application',
      fs: ['at ./index.rsh:46:38:application call to [unknown function] (defined at: ./index.rsh:46:38:function exp)', 'at ./index.rsh:46:38:application call to "liftedInteract" (defined at: ./index.rsh:46:38:application)'],
      msg: 'notifyStudent',
      who: 'University'
      });
    
    }
  else {
    }
  const v615 = stdlib.safeMul(v606, v605);
  
  const txn2 = await (ctc.sendrecv({
    args: [v600, v601, v602, v603, v604, v605, v606, v607, v608, v612],
    evt_cnt: 0,
    funcNum: 1,
    lct: v608,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:14:dot', stdlib.UInt_max, '0'), [[v615, v604]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v618, time: v617, didSend: v104, from: v616 } = txn2;
      
      const v619 = stdlib.safeMul(v606, v605);
      ;
      const v620 = v612[stdlib.checkedBigNumberify('./index.rsh:49:14:dot', stdlib.UInt_max, '0')];
      const v621 = v620[stdlib.checkedBigNumberify('./index.rsh:49:14:dot', stdlib.UInt_max, '0')];
      const v622 = stdlib.safeAdd(v621, v619);
      const v624 = stdlib.Array_set(v620, '0', v622);
      const v625 = stdlib.Array_set(v612, stdlib.checkedBigNumberify('./index.rsh:49:14:dot', stdlib.UInt_max, '0'), v624);
      sim_r.txns.push({
        amt: v619,
        kind: 'to',
        tok: v604
        });
      const v628 = stdlib.safeAdd(v608, v607);
      const v633 = v602;
      const v634 = v606;
      const v635 = v617;
      const v641 = v625;
      const v642 = stdlib.checkedBigNumberify('./index.rsh:26:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v657 = stdlib.gt(v634, stdlib.checkedBigNumberify('./index.rsh:67:38:decimal', stdlib.UInt_max, '0'));
        const v658 = v633 ? v657 : false;
        
        return v658;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v778 = v641[stdlib.checkedBigNumberify('./index.rsh:87:21:application', stdlib.UInt_max, '0')];
        const v779 = v778[stdlib.checkedBigNumberify('./index.rsh:87:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v601,
          tok: v604
          });
        sim_r.txns.push({
          kind: 'from',
          to: v601,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v604
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc2, ctc5, ctc2, ctc2, ctc2, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v618, time: v617, didSend: v104, from: v616 } = txn2;
  const v619 = stdlib.safeMul(v606, v605);
  ;
  const v620 = v612[stdlib.checkedBigNumberify('./index.rsh:49:14:dot', stdlib.UInt_max, '0')];
  const v621 = v620[stdlib.checkedBigNumberify('./index.rsh:49:14:dot', stdlib.UInt_max, '0')];
  const v622 = stdlib.safeAdd(v621, v619);
  const v624 = stdlib.Array_set(v620, '0', v622);
  const v625 = stdlib.Array_set(v612, stdlib.checkedBigNumberify('./index.rsh:49:14:dot', stdlib.UInt_max, '0'), v624);
  ;
  const v626 = stdlib.addressEq(v600, v616);
  stdlib.assert(v626, {
    at: './index.rsh:49:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'University'
    });
  const v628 = stdlib.safeAdd(v608, v607);
  let v633 = v602;
  let v634 = v606;
  let v635 = v617;
  let v641 = v625;
  let v642 = stdlib.checkedBigNumberify('./index.rsh:26:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v657 = stdlib.gt(v634, stdlib.checkedBigNumberify('./index.rsh:67:38:decimal', stdlib.UInt_max, '0'));
    const v658 = v633 ? v657 : false;
    
    return v658;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: ['time', v628],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc9],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v768], secs: v770, time: v769, didSend: v522, from: v767 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v771 = true;
      await txn4.getOutput('Student_timesUp', 'v771', ctc4, v771);
      const cv633 = false;
      const cv634 = v634;
      const cv635 = v769;
      const cv641 = v641;
      const cv642 = v642;
      
      v633 = cv633;
      v634 = cv634;
      v635 = cv635;
      v641 = cv641;
      v642 = cv642;
      
      continue;
      }
    else {
      const {data: [v701], secs: v703, time: v702, didSend: v414, from: v700 } = txn3;
      undefined /* setApiDetails */;
      const v705 = v701[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '0')];
      const v706 = v701[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '1')];
      const v707 = v701[stdlib.checkedBigNumberify('./index.rsh:68:10:spread', stdlib.UInt_max, '2')];
      const v708 = stdlib.addressEq(v601, v706);
      stdlib.assert(v708, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:69:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)'],
        msg: 'Applying for wrong university',
        who: 'University'
        });
      const v710 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v705), null);
      const v711 = {
        None: 0,
        Some: 1
        }[v710[0]];
      const v712 = stdlib.eq(v711, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v713 = v712 ? false : true;
      stdlib.assert(v713, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:70:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)'],
        msg: 'Application is processed before ',
        who: 'University'
        });
      const v716 = stdlib.eq(v603, v707);
      stdlib.assert(v716, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)', 'at ./index.rsh:68:71:application call to [unknown function] (defined at: ./index.rsh:68:71:function exp)'],
        msg: 'Price and courseFee does not match',
        who: 'University'
        });
      const v719 = stdlib.safeAdd(v642, v707);
      ;
      const v736 = true;
      await txn3.getOutput('Student_applyForCourse', 'v736', ctc4, v736);
      await stdlib.mapSet(map0, v705, null);
      const v746 = v641[stdlib.checkedBigNumberify('./index.rsh:76:40:application', stdlib.UInt_max, '0')];
      const v747 = v746[stdlib.checkedBigNumberify('./index.rsh:76:40:application', stdlib.UInt_max, '0')];
      const v751 = stdlib.safeSub(v747, v605);
      const v753 = stdlib.Array_set(v746, '0', v751);
      const v754 = stdlib.Array_set(v641, stdlib.checkedBigNumberify('./index.rsh:76:40:application', stdlib.UInt_max, '0'), v753);
      ;
      const txn4 = await (ctc.sendrecv({
        args: [v600, v601, v603, v604, v605, v628, v634, v700, v706, v719, v754],
        evt_cnt: 0,
        funcNum: 5,
        lct: v702,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:62:20:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v757, time: v756, didSend: v497, from: v755 } = txn4;
          
          ;
          const v760 = stdlib.safeSub(v634, stdlib.checkedBigNumberify('./index.rsh:78:34:decimal', stdlib.UInt_max, '1'));
          const v761 = stdlib.gt(v760, stdlib.checkedBigNumberify('./index.rsh:78:39:decimal', stdlib.UInt_max, '0'));
          const cv633 = v761;
          const cv634 = v760;
          const cv635 = v756;
          const cv641 = v754;
          const cv642 = v719;
          
          await (async () => {
            const v633 = cv633;
            const v634 = cv634;
            const v635 = cv635;
            const v641 = cv641;
            const v642 = cv642;
            
            if (await (async () => {
              const v657 = stdlib.gt(v634, stdlib.checkedBigNumberify('./index.rsh:67:38:decimal', stdlib.UInt_max, '0'));
              const v658 = v633 ? v657 : false;
              
              return v658;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v778 = v641[stdlib.checkedBigNumberify('./index.rsh:87:21:application', stdlib.UInt_max, '0')];
              const v779 = v778[stdlib.checkedBigNumberify('./index.rsh:87:21:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v601,
                tok: v604
                });
              sim_r.txns.push({
                kind: 'from',
                to: v601,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v604
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc3, ctc2, ctc5, ctc2, ctc2, ctc2, ctc3, ctc3, ctc2, ctc8],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v757, time: v756, didSend: v497, from: v755 } = txn4;
      ;
      const v758 = stdlib.addressEq(v600, v755);
      stdlib.assert(v758, {
        at: './index.rsh:62:20:dot',
        fs: ['at ./index.rsh:77:21:application call to "setViews" (defined at: ./index.rsh:57:56:function exp)', 'at ./index.rsh:73:34:application call to [unknown function] (defined at: ./index.rsh:73:34:function exp)'],
        msg: 'sender correct',
        who: 'University'
        });
      const v760 = stdlib.safeSub(v634, stdlib.checkedBigNumberify('./index.rsh:78:34:decimal', stdlib.UInt_max, '1'));
      const v761 = stdlib.gt(v760, stdlib.checkedBigNumberify('./index.rsh:78:39:decimal', stdlib.UInt_max, '0'));
      const cv633 = v761;
      const cv634 = v760;
      const cv635 = v756;
      const cv641 = v754;
      const cv642 = v719;
      
      v633 = cv633;
      v634 = cv634;
      v635 = cv635;
      v641 = cv641;
      v642 = cv642;
      
      continue;
      
      }
    
    }
  const v778 = v641[stdlib.checkedBigNumberify('./index.rsh:87:21:application', stdlib.UInt_max, '0')];
  const v779 = v778[stdlib.checkedBigNumberify('./index.rsh:87:21:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function Student_applyForCourse(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Student_applyForCourse expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Student_applyForCourse expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Student_applyForCourse4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Student_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Student_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Student_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Student_timesUp4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Student_applyForCourse(address,address,uint64)byte`, `Student_timesUp()byte`],
    pure: [`courseCertificate_courseNft()uint64`, `courseCertificate_student()address`, `courseCertificate_university()address`],
    sigs: [`Student_applyForCourse(address,address,uint64)byte`, `Student_timesUp()byte`, `courseCertificate_courseNft()uint64`, `courseCertificate_student()address`, `courseCertificate_university()address`]
    },
  appApproval: `BiASAAEEBUBgSFBYCKim66UJtOeuyw+omNztD7q5sfoGA3lBoI0GJgMBAAEBACI1ADEYQQUWKmRJIls1ASEJWzUCMRkjEkEACDEAKChmQgTkNhoAF0lBAIsiNQQjNQZJIQoMQABISSELDEAAOUkhDAxAABkhDBJENAElEkQoZClkUEk1A1eIIDUHQgS3IQsSRDQBJRJEKGQpZFBJNQNXSAg1B0IEniEKEkQqQgC+SSENDEAAEiENEkQ2GgE2GgJQNhoDUEIBF4GRoLCSBRJENAElEkQoZClkUEk1A1doIDUHQgRgNhoCFzUENhoDNhoBF0khDgxAAfpJJAxAAN9JJQxAAGclEkQlNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEzJmSXLA0/zEAEkQ0AyEFWyMJNf40/zQDVyAgNAMhBFs0AyEGWzQDIQdbNAMhCFs0/iINNP4yBjQDV7ARNAOBqAFbQgL2SCQ0ARJENARJIhJMNAISEUQoZClkUEk1AyEIWzX/STUFNf6ABNTgGC00/lCwMgY0/w9EgAkAAAAAAAADAwGwKTUHNANXACA0A1cgIDQDIQRbNAMhBls0AyEHWzT/IjQDIQVbMgY0A1doETQDIQ9bQgKESCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpXACA1/1cgIDX+IQRbNf0hBls1/CEHWzX7IQhbNfohBVs1+VdoETX4STUFNfeABPcvHKo091CwMgY0+gxENPdXACA19jT3VyAgNfU09yEEWzX0NP409RJENPaIAxMiVSMTRDT9NPQSRDQDIQ9bNPQINfM09IgDBoAJAAAAAAAAAuABsCk1BzT2KClmNPhXABFJNfJJIls0+wkWNfBXCAk08ExQNfGxIrIBNPuyEiSyEDT2shQ0/LIRszT/NP5QNP0WUDT8FlA0+xZQNPoWUDT5FlAxAFA09VA08xZQNPFQKEsBVwB/ZylLAVd/QmdIJTUBMgY1AkICJkkjDEAAlCMSRCM0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSVcAIDX/gUlbNf6BUVs1/YFZWzX8V3ERNfuABJqLkXSwNPw0/Qs1+jT7VwARNfk0+jT+iAJENP8xABJENP80A1cgIDQDIRBbNP40/TQDgWlbNAOBYVsINANXQAEXNPwyBjT5SSJbNPoIFjX4VwgJNPhMUCJCANVIIRGIAeUiNAESRDQESSISTDQCEhFESTUFSUpKSVcAIDX/VyABFzX+gSFbNf2BKVs1/IExWzX7gTlbNfohEFs1+YAERzv+nTT/UDT+FlEHCFA0/RZQNPwWUDT7FlA0+hZQNPkWULCBEa9JNfhXABEhCa819lcICTT2TFA19yERiAFpsSKyASKyEiSyEDIKshQ0/LIRszEANP9QNP4WUQcIUDT9FlA0/BZQNPsWUDT6FlA0+RZQMgYWUDT3UChLAVcAf2cpSwFXfwNnSCM1ATIGNQJCALc1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NPs0/CINEEEAOTT1NPZQNPcWUDT4FlA0+RZQNPoWUDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/AmdIJDUBMgY1AkIAXrEisgE0/lcAESJbshIkshA09rIUNPiyEbOxIrIBNP+yCCOyEDT2sgezsSKyASKyEiSyEDIJshUyCrIUNPiyEbNCAAAxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhDjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAAA0goiShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 2,
  stateSize: 193,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v601",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v602",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v603",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v604",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v605",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v606",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v607",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v601",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v602",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v603",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v604",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v605",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v606",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v607",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v701",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v768",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v736",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v771",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_a1",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
        "type": "uint256"
      }
    ],
    "name": "Student_applyForCourse",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Student_timesUp",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v701",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v768",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "courseCertificate_courseNft",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "courseCertificate_student",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "courseCertificate_university",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002eff38038062002eff833981016040819052620000269162000500565b600080554360035562000038620002cf565b7fededbc0610b434ff35d916c3af6dc3955e77560206a2a4269d503724f7b233433383604051620000d992919060006101208201905060018060a01b038085168352835160208401526020840151818151166040850152602081015115156060850152604081015160808501528160608201511660a0850152608081015160c085015260a081015160e085015260c081015161010085015250509392505050565b60405180910390a180516000908190528151602090810182905282516040908101839052835182850180519190915280518251606081018452858152825151850151948101949094529051518201511515918301919091526200013e92909162000222565b6040820152620001513415600a620002a5565b6200015b62000316565b33815260208084018051516001600160a01b0390811683850152815183015115156040808601919091528251810151606080870191909152835101519091166080808601919091528251015160a0808601919091528251015160c08086019190915291519091015160e084015243610100840181905284820151610120850152600160008190555551620001f29183910162000613565b604051602081830303815290604052600290805190602001906200021892919062000388565b505050506200072a565b6200022c62000417565b60005b600181101562000282578481600181106200024e576200024e620005b7565b6020020151828260018110620002685762000268620005b7565b6020020152806200027981620006c3565b9150506200022f565b5081818460018110620002995762000299620005b7565b60200201529392505050565b81620002cb5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160c081019091526000606082018181526080830182905260a08301919091528152602081016200030262000417565b81526020016200031162000417565b905290565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000151581526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016200031162000417565b8280546200039690620006ed565b90600052602060002090601f016020900481019282620003ba576000855562000405565b82601f10620003d557805160ff191683800117855562000405565b8280016001018555821562000405579182015b8281111562000405578251825591602001919060010190620003e8565b506200041392915062000464565b5090565b60405180602001604052806001905b6200044d604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004265790505090565b5b8082111562000413576000815560010162000465565b604080519081016001600160401b0381118282101715620004ac57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620004ac57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620004fb57600080fd5b919050565b60008183036101008112156200051557600080fd5b6200051f6200047b565b8351815260e0601f19830112156200053657600080fd5b62000540620004b2565b91506200055060208501620004e3565b8252604084015180151581146200056657600080fd5b6020830152606084015160408301526200058360808501620004e3565b606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b8060005b60018110156200060d578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101620005d1565b50505050565b81516001600160a01b03168152610180810160208301516200064060208401826001600160a01b03169052565b50604083015162000655604084018215159052565b506060830151606083015260808301516200067b60808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151620006bb82850182620005cd565b505092915050565b6000600019821415620006e657634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200070257607f821691505b602082108114156200072457634e487b7160e01b600052602260045260246000fd5b50919050565b6127c5806200073a6000396000f3fe6080604052600436106100bd5760003560e01c80635ea7ac13116100795780638e314769116100565780638e314769146101bf578063a98bf223146101d2578063ab53f2c6146101e5578063de6b8e0f1461020857005b80635ea7ac131461018d578063723a06a5146101a257806383230757146101aa57005b80631e93b0f1146100c6578063207d5c23146100ea5780632c10a159146100fd5780633bc5b7bf146101105780633d1543121461013d5780634f78b4131461016a57005b366100c457005b005b3480156100d257600080fd5b506003545b6040519081526020015b60405180910390f35b6100c46100f8366004611e9b565b61021d565b6100c461010b366004611ec5565b61024d565b34801561011c57600080fd5b5061013061012b366004611ef6565b610279565b6040516100e19190611f29565b34801561014957600080fd5b506101526102a5565b6040516001600160a01b0390911681526020016100e1565b61017d610178366004611f70565b6102b7565b60405190151581526020016100e1565b34801561019957600080fd5b50610152610315565b61017d610321565b3480156101b657600080fd5b506001546100d7565b6100c46101cd366004611ec5565b61035c565b6100c46101e0366004611ec5565b610388565b3480156101f157600080fd5b506101fa6103b4565b6040516100e1929190611fdd565b34801561021457600080fd5b50610152610451565b604080518082019091526000808252602082015261024961024336849003840184612108565b8261045d565b5050565b6040805180820190915260008082526020820152610249610273368490038401846121b6565b82610852565b604080516060810182526000808252602082018190529181019190915261029f82610af6565b92915050565b6000806102b181610bcf565b91505090565b60006102c1611b9b565b60208082018051516001600160a01b0380891690915281515190871690830152515160409081018590528051808201909152600080825291810191909152610309828261045d565b519150505b9392505050565b6000806102b181610e09565b600061032b611bd9565b60208082015160009081905260408051808201909152818152918201526103528282611043565b6020015192915050565b6040805180820190915260008082526020820152610249610382368490038401846121b6565b82611258565b60408051808201909152600080825260208201526102496103ae368490038401846121ee565b82611043565b6000606060005460028080546103c990612248565b80601f01602080910402602001604051908101604052809291908181526020018280546103f590612248565b80156104425780601f1061041757610100808354040283529160200191610442565b820191906000526020600020905b81548152906001019060200180831161042557829003601f168201915b50505050509050915091509091565b6000806102b18161145a565b61046d6004600054146014611691565b815161048890158061048157508251600154145b6015611691565b60008080556002805461049a90612248565b80601f01602080910402602001604051908101604052809291908181526020018280546104c690612248565b80156105135780601f106104e857610100808354040283529160200191610513565b820191906000526020600020905b8154815290600101906020018083116104f657829003601f168201915b505050505080602001905181019061052b919061231c565b9050610535611c03565b6105468260a0015143106016611691565b604080513381528551602080830191909152808701515180516001600160a01b0390811684860152918101519091166060830152820151608082015290517f4811908c578d6932e4701ee728daff6d22384791a8f9b3a10a37d0814bf7ecba9181900360a00190a16105dd846020015160000151602001516001600160a01b031683602001516001600160a01b0316146010611691565b6020840151515161061c906001906105f490610af6565b51600181111561060657610606611f13565b14610612576001610615565b60005b6011611691565b610639846020015160000151604001518360400151146012611691565b610654826101000151856020015160000151604001516116b7565b81526020840151516040015161066d9034146013611691565b604051600181527f1999e1fdfa47d99596c2621d3a93bc2891de469e405627fd5f83386b268138ca9060200160405180910390a160018084526020858101805151516001600160a01b03908116600090815260049093526040808420805460ff191690951790945590515151168152818120805462ff00001916905560e084018051835160608101909452905151516080860151610768949293929182916107159190611704565b81526020018660e00151600060018110610731576107316123b2565b60200201516020015181526020018660e00151600060018110610756576107566123b2565b60200201516040015115159052611753565b816020018190525061078f82606001518560200151600001516000015184608001516117c7565b610797611c1d565b82516001600160a01b039081168252602080850151821681840152604080860151818501526060808701518416908501526080808701519085015260a0808701519085015260c080870151908501523360e08501528782015151820151909216610100840152835161012084015283810151610140840152600560005543600155905161082691839101612406565b6040516020818303038152906040526002908051906020019061084a929190611ca4565b505050505050565b610862600160005414600e611691565b815161087d90158061087657508251600154145b600f611691565b60008080556002805461088f90612248565b80601f01602080910402602001604051908101604052809291908181526020018280546108bb90612248565b80156109085780601f106108dd57610100808354040283529160200191610908565b820191906000526020600020905b8154815290600101906020018083116108eb57829003601f168201915b505050505080602001905181019061092091906124cb565b90506109386040518060200160405280600081525090565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16109918260c001518360a001516117e0565b815261099f3415600b611691565b6109bc6109b5338460800151846000015161183f565b600c611691565b81516109d4906001600160a01b03163314600d611691565b6109dc611d28565b825181516001600160a01b039182169052602080850151835190831691015260608085015183516040015260808086015184519316929091019190915260a084015182519091015261010083015160e0840151610a3991906116b7565b815160a001526040838101516020808401805192151590925260c086015182519091015251439082015261012084018051825160608101909352905151518451610ad09360009290918291610a8d916116b7565b8152602001876101200151600060018110610aaa57610aaa6123b2565b6020020151602001518152602001876101200151600060018110610756576107566123b2565b60208201805160600191909152516000608090910152610aef81611855565b5050505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610b4257610b42611f13565b1415610bbf576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610b8357610b83611f13565b6001811115610b9457610b94611f13565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b600060016000541415610c8c57600060028054610beb90612248565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1790612248565b8015610c645780601f10610c3957610100808354040283529160200191610c64565b820191906000526020600020905b815481529060010190602001808311610c4757829003601f168201915b5050505050806020019051810190610c7c91906124cb565b9050610c8a60006007611691565b505b60046000541415610d4757600060028054610ca690612248565b80601f0160208091040260200160405190810160405280929190818152602001828054610cd290612248565b8015610d1f5780601f10610cf457610100808354040283529160200191610d1f565b820191906000526020600020905b815481529060010190602001808311610d0257829003601f168201915b5050505050806020019051810190610d37919061231c565b9050610d4560006007611691565b505b60056000541415610dfd57600060028054610d6190612248565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8d90612248565b8015610dda5780601f10610daf57610100808354040283529160200191610dda565b820191906000526020600020905b815481529060010190602001808311610dbd57829003601f168201915b5050505050806020019051810190610df29190612572565b606001519392505050565b610bca60006007611691565b600060016000541415610ec657600060028054610e2590612248565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5190612248565b8015610e9e5780601f10610e7357610100808354040283529160200191610e9e565b820191906000526020600020905b815481529060010190602001808311610e8157829003601f168201915b5050505050806020019051810190610eb691906124cb565b9050610ec460006008611691565b505b60046000541415610f8157600060028054610ee090612248565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0c90612248565b8015610f595780601f10610f2e57610100808354040283529160200191610f59565b820191906000526020600020905b815481529060010190602001808311610f3c57829003601f168201915b5050505050806020019051810190610f71919061231c565b9050610f7f60006008611691565b505b6005600054141561103757600060028054610f9b90612248565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc790612248565b80156110145780601f10610fe957610100808354040283529160200191611014565b820191906000526020600020905b815481529060010190602001808311610ff757829003601f168201915b505050505080602001905181019061102c9190612572565b60e001519392505050565b610bca60006008611691565b6110536004600054146018611691565b815161106e90158061106757508251600154145b6019611691565b60008080556002805461108090612248565b80601f01602080910402602001604051908101604052809291908181526020018280546110ac90612248565b80156110f95780601f106110ce576101008083540402835291602001916110f9565b820191906000526020600020905b8154815290600101906020018083116110dc57829003601f168201915b5050505050806020019051810190611111919061231c565b90506111258160a00151431015601a611691565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a161117934156017611691565b604051600181527f4b33adbd65e0ffaad69762beb555c1a1cd591d55e463dc6c5251bbfd2d4d8b309060200160405180910390a1600160208301526111bc611d28565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518551941693810193909352608080860151855182015260a08087015186519091015282850180516000905260c087015181519094019390935282514392019190915260e085015182519093019290925261010084015190519091015261125281611855565b50505050565b611268600560005414601d611691565b815161128390158061127c57508251600154145b601e611691565b60008080556002805461129590612248565b80601f01602080910402602001604051908101604052809291908181526020018280546112c190612248565b801561130e5780601f106112e35761010080835404028352916020019161130e565b820191906000526020600020905b8154815290600101906020018083116112f157829003601f168201915b50505050508060200190518101906113269190612572565b905061133e6040518060200160405280600081525090565b60408051338152855160208083019190915286015115158183015290517fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d9181900360600190a16113913415601b611691565b81516113a9906001600160a01b03163314601c611691565b6113b88260c001516001611704565b81526113c2611d28565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701518551941693810193909352608080870151855182015260a080880151865190910152855183860180519115159091528651815190940193909352825143920191909152610140860151825190930192909252610120850151905190910152610aef81611855565b6000600160005414156115175760006002805461147690612248565b80601f01602080910402602001604051908101604052809291908181526020018280546114a290612248565b80156114ef5780601f106114c4576101008083540402835291602001916114ef565b820191906000526020600020905b8154815290600101906020018083116114d257829003601f168201915b505050505080602001905181019061150791906124cb565b905061151560006009611691565b505b600460005414156115d25760006002805461153190612248565b80601f016020809104026020016040519081016040528092919081815260200182805461155d90612248565b80156115aa5780601f1061157f576101008083540402835291602001916115aa565b820191906000526020600020905b81548152906001019060200180831161158d57829003601f168201915b50505050508060200190518101906115c2919061231c565b90506115d060006009611691565b505b60056000541415611689576000600280546115ec90612248565b80601f016020809104026020016040519081016040528092919081815260200182805461161890612248565b80156116655780601f1061163a57610100808354040283529160200191611665565b820191906000526020600020905b81548152906001019060200180831161164857829003601f168201915b505050505080602001905181019061167d9190612572565b61010001519392505050565b610bca600060095b816102495760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826116c48382612635565b915081101561029f5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016116ae565b600082611711838261264d565b915081111561029f5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016116ae565b61175b611d6e565b60005b60018110156117a757848160018110611779576117796123b2565b6020020151828260018110611790576117906123b2565b60200201528061179f81612664565b91505061175e565b50818184600181106117bb576117bb6123b2565b60200201529392505050565b6117d28383836119b5565b6117db57600080fd5b505050565b6000811580611804575082826117f6818361267f565b9250611802908361269e565b145b61029f5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016116ae565b600061184d83853085611a86565b949350505050565b602081015151611866576000611873565b6000816020015160200151115b1561193057611880611db9565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015181850152845160609081015190931683850152845160809081015181860152855160a09081015190860152828601805184015160c087015280519094015160e0860152925190920151610100840152600460005543600155905161190c918391016126c0565b604051602081830303815290604052600290805190602001906117db929190611ca4565b80516060808201516020928301519284015190910151515161195292906117c7565b8060000151602001516001600160a01b03166108fc8260200151608001519081150290604051600060405180830381858888f1935050505015801561199b573d6000803e3d6000fd5b50600080805560018190556119b290600290611e26565b50565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611a1491612756565b60006040518083038185875af1925050503d8060008114611a51576040519150601f19603f3d011682016040523d82523d6000602084013e611a56565b606091505b5091509150611a6782826002611b60565b5080806020019051810190611a7c9190612772565b9695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611aed91612756565b60006040518083038185875af1925050503d8060008114611b2a576040519150601f19603f3d011682016040523d82523d6000602084013e611b2f565b606091505b5091509150611b4082826001611b60565b5080806020019051810190611b559190612772565b979650505050505050565b60608315611b6f57508161030e565b825115611b7f5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016116ae565b604051806040016040528060008152602001611bd460408051608081018252600060208201818152928201819052606082015290815290565b905290565b604051806040016040528060008152602001611bd460405180602001604052806000151581525090565b604051806040016040528060008152602001611bd4611d6e565b60405180610160016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001611bd4611d6e565b828054611cb090612248565b90600052602060002090601f016020900481019282611cd25760008555611d18565b82601f10611ceb57805160ff1916838001178555611d18565b82800160010185558215611d18579182015b82811115611d18578251825591602001919060010190611cfd565b50611d24929150611e5c565b5090565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082019290925290815260208101611bd4611e71565b60405180602001604052806001905b611da3604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611d7d5790505090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001611e19611d6e565b8152602001600081525090565b508054611e3290612248565b6000825580601f10611e42575050565b601f0160209004906000526020600020908101906119b291905b5b80821115611d245760008155600101611e5d565b6040518060a001604052806000151581526020016000815260200160008152602001611e19611d6e565b600060808284031215611ead57600080fd5b50919050565b600060408284031215611ead57600080fd5b600060408284031215611ed757600080fd5b61030e8383611eb3565b6001600160a01b03811681146119b257600080fd5b600060208284031215611f0857600080fd5b813561030e81611ee1565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611f4e57634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b600080600060608486031215611f8557600080fd5b8335611f9081611ee1565b92506020840135611fa081611ee1565b929592945050506040919091013590565b60005b83811015611fcc578181015183820152602001611fb4565b838111156112525750506000910152565b8281526040602082015260008251806040840152612002816060850160208701611fb1565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561205057612050612017565b60405290565b6040516060810167ffffffffffffffff8111828210171561205057612050612017565b6040805190810167ffffffffffffffff8111828210171561205057612050612017565b604051610120810167ffffffffffffffff8111828210171561205057612050612017565b604051610140810167ffffffffffffffff8111828210171561205057612050612017565b604051610160810167ffffffffffffffff8111828210171561205057612050612017565b6000818303608081121561211b57600080fd5b6040516040810181811067ffffffffffffffff8211171561213e5761213e612017565b604052833581526060601f198301121561215757600080fd5b61215f61202d565b9150612169612056565b602085013561217781611ee1565b8152604085013561218781611ee1565b60208281019190915260609590950135604082015282529283015250919050565b80151581146119b257600080fd5b6000604082840312156121c857600080fd5b6121d0612079565b8235815260208301356121e2816121a8565b60208201529392505050565b6000818303604081121561220157600080fd5b612209612079565b833581526020601f198301121561221f57600080fd5b61222761202d565b91506020840135612237816121a8565b825260208101919091529392505050565b600181811c9082168061225c57607f821691505b60208210811415611ead57634e487b7160e01b600052602260045260246000fd5b8051610bca81611ee1565b8051610bca816121a8565b600082601f8301126122a457600080fd5b6122ac61202d565b806060808501868111156122bf57600080fd5b855b81811015612310578281890312156122d95760008081fd5b6122e1612056565b81518152602080830151818301526040808401516122fe816121a8565b908301529086529094019382016122c1565b50919695505050505050565b6000610160828403121561232f57600080fd5b61233761209c565b6123408361227d565b815261234e6020840161227d565b6020820152604083015160408201526123696060840161227d565b60608201526080830151608082015260a083015160a082015260c083015160c08201526123998460e08501612293565b60e0820152610140929092015161010083015250919050565b634e487b7160e01b600052603260045260246000fd5b8060005b60018110156112525781518051855260208082015181870152604091820151151591860191909152606090940193909101906001016123cc565b81516001600160a01b031681526101a08101602083015161243260208401826001600160a01b03169052565b5060408301516040830152606083015161245760608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015161249060e08401826001600160a01b03169052565b50610100838101516001600160a01b0316908301526101208084015190830152610140808401516124c3828501826123c8565b505092915050565b600061018082840312156124de57600080fd5b6124e66120c0565b6124ef8361227d565b81526124fd6020840161227d565b602082015261250e60408401612288565b6040820152606083015160608201526125296080840161227d565b608082015260a083015160a082015260c083015160c082015260e083015160e082015261010080840151818301525061012061256785828601612293565b908201529392505050565b60006101a0828403121561258557600080fd5b61258d6120e4565b6125968361227d565b81526125a46020840161227d565b6020820152604083015160408201526125bf6060840161227d565b60608201526080830151608082015260a083015160a082015260c083015160c08201526125ee60e0840161227d565b60e082015261010061260181850161227d565b90820152610120838101519082015261014061256785828601612293565b634e487b7160e01b600052601160045260246000fd5b600082198211156126485761264861261f565b500190565b60008282101561265f5761265f61261f565b500390565b60006000198214156126785761267861261f565b5060010190565b60008160001904831182151516156126995761269961261f565b500290565b6000826126bb57634e487b7160e01b600052601260045260246000fd5b500490565b81516001600160a01b031681526020808301516101608301916126ed908401826001600160a01b03169052565b5060408301516040830152606083015161271260608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015161274360e08401826123c8565b5061010083015161014083015292915050565b60008251612768818460208701611fb1565b9190910192915050565b60006020828403121561278457600080fd5b815161030e816121a856fea26469706673582212204742e5d4653a8bca601a4b5b89e5d3eb8417a30913beb05b235dfca553e81c0c64736f6c634300080c0033`,
  BytecodeLen: 12031,
  Which: `oD`,
  version: 7,
  views: {
    courseCertificate: {
      courseNft: `courseCertificate_courseNft`,
      student: `courseCertificate_student`,
      university: `courseCertificate_university`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:43:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:89:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:55:52:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:61:17:after expr stmt semicolon',
    fs: ['at ./index.rsh:77:21:application call to "setViews" (defined at: ./index.rsh:57:56:function exp)', 'at ./index.rsh:73:34:application call to [unknown function] (defined at: ./index.rsh:73:34:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Student_applyForCourse": Student_applyForCourse,
  "Student_timesUp": Student_timesUp,
  "University": University
  };
export const _APIs = {
  Student: {
    applyForCourse: Student_applyForCourse,
    timesUp: Student_timesUp
    }
  };
