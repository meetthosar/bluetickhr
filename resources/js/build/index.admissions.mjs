// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

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
      const [v693, v694, v695, v696, v697, v698, v699, v700, v701, v705] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v693, v694, v696, v697, v698, v721, v727, v728, v729, v730, v737, v738] = svs;
      return (await ((async () => {
        
        
        return v729;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const courseCertificate_student = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v693, v694, v695, v696, v697, v698, v699, v700, v701, v705] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v693, v694, v696, v697, v698, v721, v727, v728, v729, v730, v737, v738] = svs;
      return (await ((async () => {
        
        
        return v727;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const courseCertificate_university = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v693, v694, v695, v696, v697, v698, v699, v700, v701, v705] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v693, v694, v696, v697, v698, v721, v727, v728, v729, v730, v737, v738] = svs;
      return (await ((async () => {
        
        
        return v728;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      courseCertificate: {
        courseNft: {
          decode: courseCertificate_courseNft,
          dom: [],
          rng: ctc3
          },
        student: {
          decode: courseCertificate_student,
          dom: [],
          rng: ctc0
          },
        university: {
          decode: courseCertificate_university,
          dom: [],
          rng: ctc0
          }
        }
      },
    views: {
      1: [ctc0, ctc0, ctc1, ctc2, ctc3, ctc2, ctc2, ctc2, ctc2, ctc5],
      4: [ctc0, ctc0, ctc2, ctc3, ctc2, ctc2, ctc0, ctc0, ctc3, ctc2, ctc5, ctc2]
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
  
  
  const [v693, v694, v696, v697, v698, v721, v727, v728, v729, v730, v737, v738] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc2, ctc3, ctc4, ctc3, ctc3, ctc2, ctc2, ctc4, ctc3, ctc7, ctc3]);
  const v762 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)'],
    msg: 'in',
    who: 'Student_applyForCourse'
    });
  const v763 = v762[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v764 = v762[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v765 = v762[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v769 = stdlib.addressEq(v694, v764);
  stdlib.assert(v769, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:68:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)'],
    msg: 'Applying for wrong university',
    who: 'Student_applyForCourse'
    });
  const v771 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v763), null);
  const v772 = {
    None: 0,
    Some: 1
    }[v771[0]];
  const v773 = stdlib.eq(v772, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v774 = v773 ? false : true;
  stdlib.assert(v774, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:69:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)'],
    msg: 'Application is processed before ',
    who: 'Student_applyForCourse'
    });
  const v777 = stdlib.eq(v696, v765);
  stdlib.assert(v777, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:70:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)'],
    msg: 'Price and courseFee does not match',
    who: 'Student_applyForCourse'
    });
  const v779 = stdlib.addressEq(v763, v693);
  const v780 = v779 ? false : true;
  stdlib.assert(v780, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)'],
    msg: 'University can not be a student',
    who: 'Student_applyForCourse'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v693, v694, v696, v697, v698, v721, v727, v728, v729, v730, v737, v738, v762],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v765, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v804], secs: v806, time: v805, didSend: v491, from: v803 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Student_applyForCourse"
        });
      const v808 = v804[stdlib.checkedBigNumberify('./index.rsh:67:10:spread', stdlib.UInt_max, '0')];
      const v809 = v804[stdlib.checkedBigNumberify('./index.rsh:67:10:spread', stdlib.UInt_max, '1')];
      const v810 = v804[stdlib.checkedBigNumberify('./index.rsh:67:10:spread', stdlib.UInt_max, '2')];
      stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v808), null);
      const v825 = stdlib.add(v738, v810);
      sim_r.txns.push({
        amt: v810,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v845 = true;
      const v846 = await txn1.getOutput('Student_applyForCourse', 'v845', ctc5, v845);
      
      await stdlib.simMapSet(sim_r, 0, v808, null);
      const v855 = v737[stdlib.checkedBigNumberify('./index.rsh:75:40:application', stdlib.UInt_max, '0')];
      const v856 = v855[stdlib.checkedBigNumberify('./index.rsh:75:40:application', stdlib.UInt_max, '0')];
      const v860 = stdlib.sub(v856, v698);
      const v862 = stdlib.Array_set(v855, '0', v860);
      const v863 = stdlib.Array_set(v737, stdlib.checkedBigNumberify('./index.rsh:75:40:application', stdlib.UInt_max, '0'), v862);
      sim_r.txns.push({
        kind: 'from',
        to: v808,
        tok: v697
        });
      const v865 = stdlib.safeSub(v730, stdlib.checkedBigNumberify('./index.rsh:77:34:decimal', stdlib.UInt_max, '1'));
      const v866 = stdlib.gt(v865, stdlib.checkedBigNumberify('./index.rsh:77:39:decimal', stdlib.UInt_max, '0'));
      const v1256 = v803;
      const v1257 = v809;
      const v1258 = v697;
      const v1259 = v865;
      const v1261 = v863;
      const v1262 = v825;
      const v1264 = v866 ? v866 : false;
      if (v1264) {
        sim_r.isHalt = false;
        }
      else {
        const v1265 = v863[stdlib.checkedBigNumberify('./index.rsh:86:21:application', stdlib.UInt_max, '0')];
        const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:86:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v694,
          tok: v697
          });
        sim_r.txns.push({
          kind: 'from',
          to: v694,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v697
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc3, ctc4, ctc3, ctc3, ctc2, ctc2, ctc4, ctc3, ctc7, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v804], secs: v806, time: v805, didSend: v491, from: v803 } = txn1;
  undefined /* setApiDetails */;
  const v808 = v804[stdlib.checkedBigNumberify('./index.rsh:67:10:spread', stdlib.UInt_max, '0')];
  const v809 = v804[stdlib.checkedBigNumberify('./index.rsh:67:10:spread', stdlib.UInt_max, '1')];
  const v810 = v804[stdlib.checkedBigNumberify('./index.rsh:67:10:spread', stdlib.UInt_max, '2')];
  const v811 = stdlib.addressEq(v694, v809);
  stdlib.assert(v811, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:68:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)'],
    msg: 'Applying for wrong university',
    who: 'Student_applyForCourse'
    });
  const v813 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v808), null);
  const v814 = {
    None: 0,
    Some: 1
    }[v813[0]];
  const v815 = stdlib.eq(v814, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v816 = v815 ? false : true;
  stdlib.assert(v816, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:69:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)'],
    msg: 'Application is processed before ',
    who: 'Student_applyForCourse'
    });
  const v819 = stdlib.eq(v696, v810);
  stdlib.assert(v819, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:70:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)'],
    msg: 'Price and courseFee does not match',
    who: 'Student_applyForCourse'
    });
  const v821 = stdlib.addressEq(v808, v693);
  const v822 = v821 ? false : true;
  stdlib.assert(v822, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)'],
    msg: 'University can not be a student',
    who: 'Student_applyForCourse'
    });
  const v825 = stdlib.add(v738, v810);
  ;
  const v845 = true;
  const v846 = await txn1.getOutput('Student_applyForCourse', 'v845', ctc5, v845);
  if (v491) {
    stdlib.protect(ctc0, await interact.out(v804, v846), {
      at: './index.rsh:67:11:application',
      fs: ['at ./index.rsh:67:11:application call to [unknown function] (defined at: ./index.rsh:67:11:function exp)', 'at ./index.rsh:73:14:application call to "k" (defined at: ./index.rsh:72:34:function exp)', 'at ./index.rsh:72:34:application call to [unknown function] (defined at: ./index.rsh:72:34:function exp)'],
      msg: 'out',
      who: 'Student_applyForCourse'
      });
    }
  else {
    }
  
  await stdlib.mapSet(map0, v808, null);
  const v855 = v737[stdlib.checkedBigNumberify('./index.rsh:75:40:application', stdlib.UInt_max, '0')];
  const v856 = v855[stdlib.checkedBigNumberify('./index.rsh:75:40:application', stdlib.UInt_max, '0')];
  const v860 = stdlib.sub(v856, v698);
  const v862 = stdlib.Array_set(v855, '0', v860);
  const v863 = stdlib.Array_set(v737, stdlib.checkedBigNumberify('./index.rsh:75:40:application', stdlib.UInt_max, '0'), v862);
  ;
  const v865 = stdlib.safeSub(v730, stdlib.checkedBigNumberify('./index.rsh:77:34:decimal', stdlib.UInt_max, '1'));
  const v866 = stdlib.gt(v865, stdlib.checkedBigNumberify('./index.rsh:77:39:decimal', stdlib.UInt_max, '0'));
  const v1256 = v803;
  const v1257 = v809;
  const v1258 = v697;
  const v1259 = v865;
  const v1261 = v863;
  const v1262 = v825;
  const v1264 = v866 ? v866 : false;
  if (v1264) {
    return;
    }
  else {
    const v1265 = v863[stdlib.checkedBigNumberify('./index.rsh:86:21:application', stdlib.UInt_max, '0')];
    const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:86:21:application', stdlib.UInt_max, '0')];
    ;
    ;
    return;
    }
  
  
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
  
  
  const [v693, v694, v696, v697, v698, v721, v727, v728, v729, v730, v737, v738] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc2, ctc3, ctc4, ctc3, ctc3, ctc2, ctc2, ctc4, ctc3, ctc7, ctc3]);
  const v871 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:81:7:application',
    fs: ['at ./index.rsh:81:7:application call to [unknown function] (defined at: ./index.rsh:81:7:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'in',
    who: 'Student_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v693, v694, v696, v697, v698, v721, v727, v728, v729, v730, v737, v738, v871],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:81:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v873], secs: v875, time: v874, didSend: v615, from: v872 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Student_timesUp"
        });
      ;
      const v876 = true;
      const v877 = await txn1.getOutput('Student_timesUp', 'v876', ctc5, v876);
      
      const v1277 = v737[stdlib.checkedBigNumberify('./index.rsh:86:21:application', stdlib.UInt_max, '0')];
      const v1278 = v1277[stdlib.checkedBigNumberify('./index.rsh:86:21:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v694,
        tok: v697
        });
      sim_r.txns.push({
        kind: 'from',
        to: v694,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v697
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
    tys: [ctc2, ctc2, ctc3, ctc4, ctc3, ctc3, ctc2, ctc2, ctc4, ctc3, ctc7, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v873], secs: v875, time: v874, didSend: v615, from: v872 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v876 = true;
  const v877 = await txn1.getOutput('Student_timesUp', 'v876', ctc5, v876);
  stdlib.protect(ctc0, await interact.out(v873, v877), {
    at: './index.rsh:81:7:application',
    fs: ['at ./index.rsh:81:7:application call to [unknown function] (defined at: ./index.rsh:81:7:function exp)', 'at ./index.rsh:82:8:application call to "k" (defined at: ./index.rsh:81:7:function exp)', 'at ./index.rsh:80:37:application call to [unknown function] (defined at: ./index.rsh:80:37:function exp)'],
    msg: 'out',
    who: 'Student_timesUp'
    });
  
  const v1277 = v737[stdlib.checkedBigNumberify('./index.rsh:86:21:application', stdlib.UInt_max, '0')];
  const v1278 = v1277[stdlib.checkedBigNumberify('./index.rsh:86:21:application', stdlib.UInt_max, '0')];
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
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc3]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc5]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v671 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v672 = [v671];
  const v676 = stdlib.protect(ctc2, interact.courseNFT, 'for University\'s interact field courseNFT');
  const v677 = stdlib.protect(ctc3, interact.deadline, 'for University\'s interact field deadline');
  const v678 = stdlib.protect(ctc3, interact.numberOfStudents, 'for University\'s interact field numberOfStudents');
  const v679 = stdlib.protect(ctc3, interact.price, 'for University\'s interact field price');
  const v680 = stdlib.protect(ctc4, interact.university, 'for University\'s interact field university');
  
  const v683 = stdlib.protect(ctc5, await interact.startAdmissions(), {
    at: './index.rsh:31:63:application',
    fs: ['at ./index.rsh:29:18:application call to [unknown function] (defined at: ./index.rsh:29:22:function exp)'],
    msg: 'startAdmissions',
    who: 'University'
    });
  const v684 = stdlib.protect(ctc3, await interact.getAmount(), {
    at: './index.rsh:34:46:application',
    fs: ['at ./index.rsh:29:18:application call to [unknown function] (defined at: ./index.rsh:29:22:function exp)'],
    msg: 'getAmount',
    who: 'University'
    });
  const v685 = stdlib.eq(v679, stdlib.checkedBigNumberify('./index.rsh:37:20:decimal', stdlib.UInt_max, '0'));
  const v686 = v685 ? false : true;
  stdlib.assert(v686, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:37:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:29:18:application call to [unknown function] (defined at: ./index.rsh:29:22:function exp)'],
    msg: null,
    who: 'University'
    });
  const v688 = stdlib.gt(v678, stdlib.checkedBigNumberify('./index.rsh:38:30:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v688, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:38:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:29:18:application call to [unknown function] (defined at: ./index.rsh:29:22:function exp)'],
    msg: null,
    who: 'University'
    });
  const v690 = stdlib.eq(v684, stdlib.checkedBigNumberify('./index.rsh:39:18:decimal', stdlib.UInt_max, '0'));
  const v691 = v690 ? false : true;
  stdlib.assert(v691, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:39:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:29:18:application call to [unknown function] (defined at: ./index.rsh:29:22:function exp)'],
    msg: null,
    who: 'University'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v680, v683, v679, v676, v684, v678, v677],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:42:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc5, ctc3, ctc2, ctc3, ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v694, v695, v696, v697, v698, v699, v700], secs: v702, time: v701, didSend: v91, from: v693 } = txn1;
      
      const v703 = v672[stdlib.checkedBigNumberify('./index.rsh:42:14:dot', stdlib.UInt_max, '0')];
      const v704 = stdlib.Array_set(v703, '0', stdlib.checkedBigNumberify('./index.rsh:42:14:dot', stdlib.UInt_max, '0'));
      const v705 = stdlib.Array_set(v672, stdlib.checkedBigNumberify('./index.rsh:42:14:dot', stdlib.UInt_max, '0'), v704);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v697
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc3, ctc2, ctc3, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v694, v695, v696, v697, v698, v699, v700], secs: v702, time: v701, didSend: v91, from: v693 } = txn1;
  const v703 = v672[stdlib.checkedBigNumberify('./index.rsh:42:14:dot', stdlib.UInt_max, '0')];
  const v704 = stdlib.Array_set(v703, '0', stdlib.checkedBigNumberify('./index.rsh:42:14:dot', stdlib.UInt_max, '0'));
  const v705 = stdlib.Array_set(v672, stdlib.checkedBigNumberify('./index.rsh:42:14:dot', stdlib.UInt_max, '0'), v704);
  ;
  ;
  if (v695) {
    stdlib.protect(ctc0, await interact.notifyStudent(true, v697), {
      at: './index.rsh:47:38:application',
      fs: ['at ./index.rsh:47:38:application call to [unknown function] (defined at: ./index.rsh:47:38:function exp)', 'at ./index.rsh:47:38:application call to "liftedInteract" (defined at: ./index.rsh:47:38:application)'],
      msg: 'notifyStudent',
      who: 'University'
      });
    
    }
  else {
    }
  const v708 = stdlib.safeMul(v699, v698);
  
  const txn2 = await (ctc.sendrecv({
    args: [v693, v694, v695, v696, v697, v698, v699, v700, v701, v705],
    evt_cnt: 0,
    funcNum: 1,
    lct: v701,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:50:14:dot', stdlib.UInt_max, '0'), [[v708, v697]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v711, time: v710, didSend: v104, from: v709 } = txn2;
      
      const v712 = stdlib.safeMul(v699, v698);
      ;
      const v713 = v705[stdlib.checkedBigNumberify('./index.rsh:50:14:dot', stdlib.UInt_max, '0')];
      const v714 = v713[stdlib.checkedBigNumberify('./index.rsh:50:14:dot', stdlib.UInt_max, '0')];
      const v715 = stdlib.add(v714, v712);
      const v717 = stdlib.Array_set(v713, '0', v715);
      const v718 = stdlib.Array_set(v705, stdlib.checkedBigNumberify('./index.rsh:50:14:dot', stdlib.UInt_max, '0'), v717);
      sim_r.txns.push({
        amt: v712,
        kind: 'to',
        tok: v697
        });
      const v721 = stdlib.safeAdd(v701, v700);
      const v726 = v695;
      const v727 = v693;
      const v728 = v694;
      const v729 = v697;
      const v730 = v699;
      const v731 = v710;
      const v737 = v718;
      const v738 = stdlib.checkedBigNumberify('./index.rsh:27:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v754 = stdlib.gt(v730, stdlib.checkedBigNumberify('./index.rsh:66:38:decimal', stdlib.UInt_max, '0'));
        const v755 = v726 ? v754 : false;
        
        return v755;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v883 = v737[stdlib.checkedBigNumberify('./index.rsh:86:21:application', stdlib.UInt_max, '0')];
        const v884 = v883[stdlib.checkedBigNumberify('./index.rsh:86:21:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v694,
          tok: v697
          });
        sim_r.txns.push({
          kind: 'from',
          to: v694,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v697
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
    tys: [ctc4, ctc4, ctc5, ctc3, ctc2, ctc3, ctc3, ctc3, ctc3, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v711, time: v710, didSend: v104, from: v709 } = txn2;
  const v712 = stdlib.safeMul(v699, v698);
  ;
  const v713 = v705[stdlib.checkedBigNumberify('./index.rsh:50:14:dot', stdlib.UInt_max, '0')];
  const v714 = v713[stdlib.checkedBigNumberify('./index.rsh:50:14:dot', stdlib.UInt_max, '0')];
  const v715 = stdlib.add(v714, v712);
  const v717 = stdlib.Array_set(v713, '0', v715);
  const v718 = stdlib.Array_set(v705, stdlib.checkedBigNumberify('./index.rsh:50:14:dot', stdlib.UInt_max, '0'), v717);
  ;
  const v719 = stdlib.addressEq(v693, v709);
  stdlib.assert(v719, {
    at: './index.rsh:50:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'University'
    });
  const v721 = stdlib.safeAdd(v701, v700);
  let v726 = v695;
  let v727 = v693;
  let v728 = v694;
  let v729 = v697;
  let v730 = v699;
  let v731 = v710;
  let v737 = v718;
  let v738 = stdlib.checkedBigNumberify('./index.rsh:27:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v754 = stdlib.gt(v730, stdlib.checkedBigNumberify('./index.rsh:66:38:decimal', stdlib.UInt_max, '0'));
    const v755 = v726 ? v754 : false;
    
    return v755;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: ['time', v721],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v873], secs: v875, time: v874, didSend: v615, from: v872 } = txn5;
      undefined /* setApiDetails */;
      ;
      const v876 = true;
      await txn5.getOutput('Student_timesUp', 'v876', ctc5, v876);
      const cv726 = false;
      const cv727 = v727;
      const cv728 = v728;
      const cv729 = v729;
      const cv730 = v730;
      const cv731 = v874;
      const cv737 = v737;
      const cv738 = v738;
      
      v726 = cv726;
      v727 = cv727;
      v728 = cv728;
      v729 = cv729;
      v730 = cv730;
      v731 = cv731;
      v737 = cv737;
      v738 = cv738;
      
      txn3 = txn5;
      continue;
      }
    else {
      const {data: [v804], secs: v806, time: v805, didSend: v491, from: v803 } = txn4;
      undefined /* setApiDetails */;
      const v808 = v804[stdlib.checkedBigNumberify('./index.rsh:67:10:spread', stdlib.UInt_max, '0')];
      const v809 = v804[stdlib.checkedBigNumberify('./index.rsh:67:10:spread', stdlib.UInt_max, '1')];
      const v810 = v804[stdlib.checkedBigNumberify('./index.rsh:67:10:spread', stdlib.UInt_max, '2')];
      const v811 = stdlib.addressEq(v694, v809);
      stdlib.assert(v811, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:68:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)'],
        msg: 'Applying for wrong university',
        who: 'University'
        });
      const v813 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v808), null);
      const v814 = {
        None: 0,
        Some: 1
        }[v813[0]];
      const v815 = stdlib.eq(v814, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v816 = v815 ? false : true;
      stdlib.assert(v816, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:69:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)'],
        msg: 'Application is processed before ',
        who: 'University'
        });
      const v819 = stdlib.eq(v696, v810);
      stdlib.assert(v819, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:70:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)'],
        msg: 'Price and courseFee does not match',
        who: 'University'
        });
      const v821 = stdlib.addressEq(v808, v693);
      const v822 = v821 ? false : true;
      stdlib.assert(v822, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)', 'at ./index.rsh:67:71:application call to [unknown function] (defined at: ./index.rsh:67:71:function exp)'],
        msg: 'University can not be a student',
        who: 'University'
        });
      const v825 = stdlib.add(v738, v810);
      ;
      const v845 = true;
      await txn4.getOutput('Student_applyForCourse', 'v845', ctc5, v845);
      await stdlib.mapSet(map0, v808, null);
      const v855 = v737[stdlib.checkedBigNumberify('./index.rsh:75:40:application', stdlib.UInt_max, '0')];
      const v856 = v855[stdlib.checkedBigNumberify('./index.rsh:75:40:application', stdlib.UInt_max, '0')];
      const v860 = stdlib.sub(v856, v698);
      const v862 = stdlib.Array_set(v855, '0', v860);
      const v863 = stdlib.Array_set(v737, stdlib.checkedBigNumberify('./index.rsh:75:40:application', stdlib.UInt_max, '0'), v862);
      ;
      stdlib.protect(ctc0, await interact.admissionCompleted(v808), {
        at: './index.rsh:76:51:application',
        fs: ['at ./index.rsh:76:51:application call to [unknown function] (defined at: ./index.rsh:76:51:function exp)', 'at ./index.rsh:76:51:application call to "liftedInteract" (defined at: ./index.rsh:76:51:application)', 'at ./index.rsh:72:34:application call to [unknown function] (defined at: ./index.rsh:72:34:function exp)'],
        msg: 'admissionCompleted',
        who: 'University'
        });
      
      const v865 = stdlib.safeSub(v730, stdlib.checkedBigNumberify('./index.rsh:77:34:decimal', stdlib.UInt_max, '1'));
      const v866 = stdlib.gt(v865, stdlib.checkedBigNumberify('./index.rsh:77:39:decimal', stdlib.UInt_max, '0'));
      const cv726 = v866;
      const cv727 = v803;
      const cv728 = v809;
      const cv729 = v697;
      const cv730 = v865;
      const cv731 = v805;
      const cv737 = v863;
      const cv738 = v825;
      
      v726 = cv726;
      v727 = cv727;
      v728 = cv728;
      v729 = cv729;
      v730 = cv730;
      v731 = cv731;
      v737 = cv737;
      v738 = cv738;
      
      txn3 = txn4;
      continue;}
    
    }
  const v883 = v737[stdlib.checkedBigNumberify('./index.rsh:86:21:application', stdlib.UInt_max, '0')];
  const v884 = v883[stdlib.checkedBigNumberify('./index.rsh:86:21:application', stdlib.UInt_max, '0')];
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
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByARAAEEQAiopuulCbTnrssPqJjc7Q+6ubH6BgNYSFCoAcEBQaCNBiYDAQABAQAiNQAxGEEErCpkSSJbNQEhBFs1AjEZIxJBAAgxACgoZkIEejYaABdJQQCLIjUEIzUGSSEFDEAASEkhBgxAADlJIQcMQAAZIQcSRDQBJBJEKGQpZFBJNQNXgCA1B0IETSEGEkQ0ASQSRChkKWRQSTUDV6AINQdCBDQhBRJEKkIAU0khCAxAABIhCBJENhoBNhoCUDYaA1BCALuBkaCwkgUSRDQBJBJEKGQpZFBJNQNXYCA1B0ID9jYaAhc1BDYaAzYaARdJIQkMQAF+SSQMQACDJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDIQpbNf9JNQU1/oAE1OAYLTT+ULAyBjT/D0SACQAAAAAAAANsAbApNQc0A1cAIDQDVyAgNAMlWzQDIQtbNAMhDFs0/yI0A1dgIDQDV4AgNAOBoAFbNAMhDVsyBjQDV7ARNAMhDltCAmVIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/VyAgNf4lWzX9IQtbNfwhDFs1+yEKWzX6V7ARNflJNQU1+IAE9y8cqjT4ULAyBjT6DEQ0+FcAIDX3NPhXICA19jT4JVs19TT+NPYSRDT3iAMMIlUjE0Q0/TT1EkQ09zT/E0Q09YgDA4AJAAAAAAAAA00BsCk1BzT3KClmNPlXABE19LEisgE0+7ISJLIQNPeyFDT8shGzNAMhDVsjCTXzNP80/jT9NPw0+zT6NPMiDTEANPY0/DTzMgY0+TT0SSJbNPsJFlwAXAA0AyEOWzT1CEIBcEkjDEAAmSMSRCM0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/VyAgNf6BSVs1/YFRWzX8gVlbNftXcRE1+oAEmouRdLA0+zT8CzX5NPpXABE1+DT5NP2IAlE0/zEAEkQ0/zT+NAMhD1s0/TT8NAOBaVs0A4FhWwg0A1dAARc0/zT+NP00+zIGNPo0+EkiWzT5CBZcAFwAIkIA0UghEIgB8iI0ARJENARJIhJMNAISEURJNQVJSkpJVwAgNf9XIAEXNf6BIVs1/YEpWzX8gTFbNfuBOVs1+iEPWzX5gARHO/6dNP9QNP4WUQcIUDT9FlA0/BZQNPsWUDT6FlA0+RZQsIERr0k1+ElXABEhBK9cAFwANfchEIgBerEisgEishIkshAyCrIUNPyyEbMxADT/UDT+FlEHCFA0/RZQNPwWUDT7FlA0+hZQNPkWUDIGFlA091AoSwFXAH9nKUsBV38DZ0gjNQEyBjUCQgDINf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jT4NPwiDRBBAEM08jTzUDT0FlA09RZQNPYWUDT3FlA0+VA0+lA0+xZQNPwWUDT+UDT/FlAoSwFXAH9nKUsBV39KZ0gkNQEyBjUCQgBfsSKyATT+VwARIluyEiSyEDTzshQ09bIRs7EisgE0/7III7IQNPOyB7OxIrIBIrISJLIQMgmyFTIKshQ09bIRs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhCTE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAAA0goiShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 2,
  stateSize: 201,
  unsupported: [],
  version: 11,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"bool","name":"elem2","type":"bool"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"address payable","name":"elem4","type":"address"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"uint256","name":"elem7","type":"uint256"}],"internalType":"struct T8","name":"v1295","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"bool","name":"elem2","type":"bool"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"address payable","name":"elem4","type":"address"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"uint256","name":"elem7","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v845","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v876","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v1285","type":"address"},{"internalType":"address payable","name":"v1286","type":"address"},{"internalType":"uint256","name":"v1287","type":"uint256"}],"name":"Student_applyForCourse","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Student_timesUp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T10","name":"v1297","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T1","name":"elem1","type":"tuple"}],"internalType":"struct T3","name":"v1307","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T4","name":"v1317","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"courseCertificate_courseNft","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"courseCertificate_student","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"courseCertificate_university","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6200251f38819003918201601f19168301916001600160401b038311848410176200056257808492610100946040528339810103126200064d576040519061010082016001600160401b038111838210176200056257604052805182526200006e602082016200066e565b602083015260408101519081151582036200064d5760e091604084015260608101516060840152620000a3608082016200066e565b608084015260a081015160a084015260c081015160c0840152015160e0820152436003556040518060c081011060018060401b0360c083011117620005625760a08160c0600093016040528281528260208201528260408201528260608201528260808201520152604051906200011a8262000652565b6200012462000683565b825262000130620006a4565b60208301526200013f620006a4565b604083015260ff6004541662000634577ff61e6adfc2bf38b621b536e07fe02d9aadda994fb685f9db4bf0a0c0624423b46101206040513381528351602082015260018060a01b0360208501511660408201526040840151151560608201526060840151608082015260018060a01b0360808501511660a082015260a084015160c082015260c084015160e082015260e0840151610100820152a18051801590811562000627575b50156200060e57600082515260006020835101526000604083510152815160208301515260208201518051604060208201519101511515604051916200022d8362000652565b600083526020830152604082015262000245620006a4565b9160005b60018110620005be5750508152604083015234620005a557604051916001600160401b03610140840190811190841117620005625760e06040926101408501845260008552600060208601526000848601526000606086015260006080860152600060a0860152600060c08601526000828601526000610100860152620002cf620006a4565b61012086015233855260018060a01b036020820151166020860152838101511515848601526060810151606086015260018060a01b03608082015116608086015260a081015160a086015260c081015160c0860152015160e08401524361010084015201516101208201526001600055436001556101206040519133602084015260018060a01b0360208201511660408401526040810151151560608401526060810151608084015260018060a01b0360808201511660a084015260a081015160c084015260c081015160e084015260e081015161010084015261010081015182840152015161014082016000905b6001821062000578576101808452836101a081016001600160401b03811182821017620005625760405280516001600160401b0381116200056257600254600181811c9116801562000557575b60208210146200054157601f8111620004d7575b50602091601f82116001146200046d5791819260009262000461575b50508160011b916000199060031b1c1916176002555b604051611e0b9081620007148239f35b0151905082806200043b565b601f19821692600260005260206000209160005b858110620004be57508360019510620004a4575b505050811b0160025562000451565b015160001960f88460031b161c1916905582808062000495565b9192602060018192868501518155019401920162000481565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000536575b601f0160051c01905b8181106200052957506200041f565b600081556001016200051a565b909150819062000511565b634e487b7160e01b600052602260045260246000fd5b90607f16906200040b565b634e487b7160e01b600052604160045260246000fd5b602060606001926040865180518352848101518584015201511515604082015201930191019091620003be565b60405163100960cb60e01b8152600c6004820152602490fd5b620005ca8183620006eb565b51620005d78286620006eb565b52620005e48185620006eb565b506000198114620005f85760010162000249565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600b6004820152602490fd5b90506001541438620001e7565b60405163100960cb60e01b8152600a6004820152602490fd5b600080fd5b606081019081106001600160401b038211176200056257604052565b51906001600160a01b03821682036200064d57565b60405190620006928262000652565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000562576040528260005b828110620006d457505050565b8290620006e062000683565b8184015201620006c7565b906001811015620006fd5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f11461010857806336e56ea5146100ff5780633d154312146100f657806344ec750b146100ed5780634f78b413146100e4578063573b8510146100db5780635ea7ac13146100d2578063723a06a5146100c957806374c2f3e4146100c057806383230757146100b7578063ab53f2c6146100ae5763de6b8e0f0361000e576100a96107c1565b61000e565b506100a961074f565b506100a9610730565b506100a96106e6565b506100a9610689565b506100a9610622565b506100a96103cc565b506100a96102fa565b506100a9610260565b506100a96101d2565b506100a9610169565b5034610127576000366003190112610127576020600354604051908152f35b600080fd5b6001600160a01b031690565b6001600160a01b0381160361012757565b6002111561015357565b634e487b7160e01b600052602160045260246000fd5b50346101275760203660031901126101275761019860043561018a81610138565b6101926109f1565b50610a2a565b60405181516002811015610153576060926040918352602081015115156020840152015115156040820152f35b6001600160a01b03169052565b5034610127576000366003190112610127576101ec610ae2565b600460005403610247576060610243916102046108f9565b61010061022160018060a01b039260208082518301019101610bfe565b0151169182910152604051918291826001600160a01b03909116815260200190565b0390f35b60405163100960cb60e01b815260076004820152602490fd5b50608036600319011261012757610275610ae2565b6040805190918183016001600160401b038111838210176102ed575b835260043582526060366023190112610127576102e39183516102b381610878565b6024356102bf81610138565b81526044356102cd81610138565b6020820152606435858201526020820152610db2565b5160008152602090f35b6102f5610861565b610291565b506060366003190112610127576102436103ba602060043561031b81610138565b6103b360243561032a81610138565b610332610ae2565b92839161033d6109f1565b9160018060a01b03809116835280878401921682526040830191604435835260405193610369856108a0565b826103726109f1565b9182875251169052511686835101525160408251015260405190610395826108bb565b60008252858201906103a56109f1565b825260008352519052610db2565b0151151590565b60405190151581529081906020820190565b50602080600319360112610127576103e2610ae2565b506102e36040916106038351916103f8836108a0565b6004358352610405610b4e565b9061042161041c61041860045460ff1690565b1590565b61114e565b8551338152845160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159690604090a161046160016000541461116e565b61048f61047d61046f6108f9565b838082518301019101611c41565b94518015908115610616575b5061118e565b6105fe60c085018051956104a960a0820197885190611cfd565b85526104b534156111ae565b6105b3608082016104da6104d56104cc835161012c565b89519033611d5e565b6111ce565b6104f63360018060a01b036104ef865161012c565b16146111ee565b6105a58b6105ab610505610cfd565b9b61051a8d610514895161012c565b90610b32565b8c60808b8901926105378d61052f865161012c565b908501610b32565b60608a01518684015261055661054d895161012c565b60608501610b32565b5191015261058e8d60c06105876101009661057a8c60e08a82015191015190611cdb565b60a08501528b0151151590565b1515910152565b6105a58d60e061059e8a5161012c565b9101610b32565b5161012c565b908b01610b32565b916105c361012093848a01610b32565b516101408801524361016088015201519182519384519051019388828201519101511515916105f06109a4565b958652850152151587840152565b611520565b61018082015260006101a0820152611a96565b90506001541438610489565b50346101275760003660031901126101275761063c610ae2565b600460005403610670576080610243916106546108f9565b60c061022160018060a01b039260208082518301019101610bfe565b60405163100960cb60e01b815260086004820152602490fd5b506000806003193601126106e35760406020916106d76106a7610ae2565b80928451906106b5826108a0565b8082528551916106c4836108bb565b878301918083528352511515905261157d565b01511515604051908152f35b80fd5b506040366003190112610127576107256106fe610ae2565b60405161070a816108bb565b600435815260243561071b81610b6c565b602082015261157d565b602060405160008152f35b5034610127576000366003190112610127576020600154604051908152f35b5034610127576000806003193601126106e357805461076c6108f9565b906040519283918252602090604082840152835191826040850152815b8381106107aa57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610789565b5034610127576000366003190112610127576107db610ae2565b60046000540361080e5760a0610243916107f36108f9565b60e0610221600180861b039260208082518301019101610bfe565b60405163100960cb60e01b815260096004820152602490fd5b90600182811c92168015610857575b602083101461084157565b634e487b7160e01b600052602260045260246000fd5b91607f1691610836565b50634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b0382111761089357604052565b61089b610861565b604052565b602081019081106001600160401b0382111761089357604052565b604081019081106001600160401b0382111761089357604052565b601f909101601f19168101906001600160401b0382119082101761089357604052565b604051906000826002549161090d83610827565b8083526001938085169081156109835750600114610935575b50610933925003836108d6565b565b60026000908152600080516020611ddf83398151915294602093509091905b81831061096b575050610933935082010138610926565b85548884018501529485019487945091830191610954565b905061093394506020925060ff191682840152151560051b82010138610926565b6040519061093382610878565b6040519061018082016001600160401b0381118382101761089357604052565b6040519061014082016001600160401b0381118382101761089357604052565b604051906109fe82610878565b60006040838281528260208201520152565b6001600160a01b0316600090815260056020526040902090565b90610a336109f1565b6001600160a01b0383166000908152600560205260408120549193909160ff166002811015610ace57600103610ac357610a6f91929350610a10565b9060405191610a7d83610878565b549060ff8216906002821015610aaf57509060ff918352818160081c161515602084015260101c161515604082015290565b634e487b7160e01b81526021600452602490fd5b508083526020830152565b634e487b7160e01b83526021600452602483fd5b6040519060c082016001600160401b03811183821017610b25575b6040528160a06000918281528260208201528260408201528260608201528260808201520152565b610b2d610861565b610afd565b6001600160a01b039091169052565b516001600160a01b031690565b60405190610b5b826108a0565b60008252565b519061093382610138565b8015150361012757565b519061093382610b6c565b9080601f8301121561012757604091825192610b9c846108a0565b836060938484019381851161012757915b848310610bbd5750505050505090565b85838303126101275783518691610bd382610878565b84518252602091828601518382015286860151610bef81610b6c565b87820152815201920191610bad565b6101c081830312610127576101a090610c156109b1565b92610c1f82610b61565b8452610c2d60208301610b61565b602085015260408201516040850152610c4860608301610b61565b60608501526080820151608085015260a082015160a0850152610c6d60c08301610b61565b60c0850152610c7e60e08301610b61565b60e0850152610100610c91818401610b61565b908501526101208083015190850152610caf61014091828401610b81565b90840152015161016082015290565b5160028110156101535790565b60405190610cd8826108a0565b8160005b60208110610ce8575050565b602090610cf36109f1565b8184015201610cdc565b604051906101c082016001600160401b03811183821017610d7e575b604052816101a06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015282610160820152610d74610ccb565b6101808201520152565b610d86610861565b610d19565b906001811015610d9c5760051b0190565b634e487b7160e01b600052603260045260246000fd5b610dba610b4e565b90610dd2610dcd61041860045460ff1690565b61120e565b6040805133815282516020808301919091528084015180516001600160a01b039081168486015291810151909116606083015282015160808201529091907f7749b119efa30c30cdffa20d8964127860c793b472e1a895c06c68b91195959a9060a090a1610e4460046000541461122e565b610e4c6108f9565b610e60602091828082518301019101610bfe565b90610e7683518015908115611111575b5061124e565b60a0820194610e878651431061126e565b8183019682610e96895161012c565b950196610ec1610eb0610eab868b5101610b41565b61012c565b6001600160a01b039788161461128e565b6001610ee0610edb610ed6610eab8c51610b41565b610a2a565b610cbe565b610ee981610149565b0361110757610ef860006112ae565b8387860192610f0d84518a8c510151146112ce565b610f178a51610b41565b88610f25610eab8a5161012c565b9116036110fd57610f3660006112ee565b888a5101513414610f469061130e565b8851600181527f6a7ea4e0d875020b16993fbecc1ca6ee92d1065cbb0d17b9e98b34ec5ce445d790602090a160019101528751610f8290610b41565b610f8b90610a10565b805460ff191660011790558751610fa190610b41565b610faa90610a10565b805462ff00001916905560608501908151610fc49061012c565b8951610fcf90610b41565b608088019889519116610fe1926113ce565b6101209283870151610ff290611134565b8552610ffc610cfd565b9a87516110089061012c565b611012908d610b32565b5161101c9061012c565b611028908c8801610b32565b51888b015281516110389061012c565b6110459060608c01610b32565b865160808b01525160a08a01528251151560c08a01526110683360e08b01610b32565b8388510161107590610b41565b611083906101008b01610b32565b5161108d9061012c565b611098918901610b32565b51926101409384880152610160934385890152830151918251918251905190039186828201519101511515916110cc6109a4565b9384528301521515858201526110e191611520565b610180860152015191510151016101a082015261093390611a96565b610f3660016112ee565b610ef860016112ae565b90506001541438610e70565b50634e487b7160e01b600052601160045260246000fd5b60001981019081116111435790565b61114b61111d565b90565b1561115557565b60405163100960cb60e01b8152600d6004820152602490fd5b1561117557565b60405163100960cb60e01b8152600e6004820152602490fd5b1561119557565b60405163100960cb60e01b8152600f6004820152602490fd5b156111b557565b60405163100960cb60e01b815260106004820152602490fd5b156111d557565b60405163100960cb60e01b815260116004820152602490fd5b156111f557565b60405163100960cb60e01b815260126004820152602490fd5b1561121557565b60405163100960cb60e01b815260136004820152602490fd5b1561123557565b60405163100960cb60e01b815260146004820152602490fd5b1561125557565b60405163100960cb60e01b815260156004820152602490fd5b1561127557565b60405163100960cb60e01b815260166004820152602490fd5b1561129557565b60405163100960cb60e01b815260176004820152602490fd5b156112b557565b60405163100960cb60e01b815260186004820152602490fd5b156112d557565b60405163100960cb60e01b815260196004820152602490fd5b156112f557565b60405163100960cb60e01b8152601a6004820152602490fd5b1561131557565b60405163100960cb60e01b8152601b6004820152602490fd5b1561133557565b60405163100960cb60e01b8152601c6004820152602490fd5b1561135557565b60405163100960cb60e01b8152601d6004820152602490fd5b1561137557565b60405163100960cb60e01b8152601e6004820152602490fd5b1561139557565b60405163100960cb60e01b8152601f6004820152602490fd5b156113b557565b60405163100960cb60e01b815260206004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261144a93600093849392849190608081016001600160401b03811182821017611451575b6040525193165af161143a61143361145e565b80926114c0565b50602080825183010191016114ab565b1561012757565b611459610861565b611420565b3d156114a6573d906001600160401b038211611499575b6040519161148d601f8201601f1916602001846108d6565b82523d6000602084013e565b6114a1610861565b611475565b606090565b90816020910312610127575161114b81610b6c565b156114c85790565b8051156114d757805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156114f85790565b80511561150757805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b919061152a610ccb565b9260005b6001811061153c5750508252565b8061154960019284610d8b565b516115548288610d8b565b5261155f8187610d8b565b506000198114611570575b0161152e565b61157861111d565b61156a565b906109339161159961159461041860045460ff1690565b61132e565b6040805133815282516020808301919091528301511515918101919091527faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072290606090a16115eb60046000541461134e565b61161a6116086115f96108f9565b60208082518301019101610bfe565b9151801590811561174e575b5061136e565b61166e604060a0830193611631855143101561138e565b61163b34156113ae565b8151600181527f4c253465b85019190f383e0d1ea2392adca671282809a76f69d38bd3ec58204490602090a10160019052565b611676610cfd565b9161168a611684835161012c565b84610b32565b6116a361169a602084015161012c565b60208501610b32565b604082015160408401526116bd61054d606084015161012c565b608082015160808401525160a0830152600060c08301526116ed6116e460c083015161012c565b60e08401610b32565b6117146116fd60e083015161012c565b61170c61010091828601610b32565b82015161012c565b61172361012091828501610b32565b81015190610140918284015261016091438385015281015161018084015201516101a0820152611a96565b90506001541438611614565b506040513d6000823e3d90fd5b818110611772575050565b60008155600101611767565b611789600254610827565b806117915750565b601f81116001146117a457506000600255565b60026000526117e990601f0160051c600080516020611ddf833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611767565b6000602081208160025555565b6040519061018082016001600160401b03811183821017611869575b604052816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015261185f610ccb565b6101408201520152565b611871610861565b611812565b6000915b6001831061188757505050565b60019060608351918251815260209283810151848301526040809101511515908201520192019201919061187a565b9190916101a06101606101c08301946118d08482516101c5565b6118e2602082015160208601906101c5565b604081015160408501526118fe606082015160608601906101c5565b6080810151608085015260a081015160a085015261192460c082015160c08601906101c5565b61193660e082015160e08601906101c5565b61194961010080830151908601906101c5565b61012080820151908501526119676101408083015190860190611876565b0151910152565b90601f821161197b575050565b6109339160026000526020600020906020601f840160051c830193106119a9575b601f0160051c0190611767565b909150819061199c565b80519091906001600160401b038111611a89575b6119db816119d6600254610827565b61196e565b602080601f8311600114611a175750819293600092611a0c575b50508160011b916000199060031b1c191617600255565b0151905038806119f5565b6002600052601f19831694909190600080516020611ddf833981519152926000905b878210611a71575050836001959610611a58575b505050811b01600255565b015160001960f88460031b161c19169055388080611a4d565b80600185968294968601518155019501930190611a39565b611a91610861565b6119c7565b60c081015160009015611c3c575061014081015115155b15611bb557611ba2611bb0610933926101a0611ac76117f6565b91611ad5611684825161012c565b611ae561169a602083015161012c565b60408101516040840152611aff61054d606083015161012c565b6080810151608084015260a081015160a0840152611b2c611b2360e083015161012c565b60c08501610b32565b610100611b47611b3e8284015161012c565b60e08601610b32565b611b6261012091611b5a8385015161012c565b908601610b32565b610140908183015190850152610180820151908401520151610160820152611b8a6004600055565b611b9343600155565b604051928391602083016118b6565b03601f1981018352826108d6565b6119b3565b60008080836101a0611bfd610eab611bd160608699015161012c565b6105a56020860191611be3835161012c565b6101808801515151916001600160a01b03909116906113ce565b91015190828215611c33575bf115611c26575b60008055611c1e6000600155565b61093361177e565b611c2e61175a565b611c10565b506108fc611c09565b611aad565b6101808183031261012757611cd4611c576109d1565b92611c6183610b61565b8452611c6f60208401610b61565b6020850152611c8060408401610b76565b604085015260608301516060850152611c9b60808401610b61565b608085015260a083015160a085015260c083015160c085015260e083015160e08501526101008084015190850152610120809301610b81565b9082015290565b9190820191828111611cf0575b821061012757565b611cf861111d565b611ce8565b91906000928115918215611d15575b50501561012757565b908092945060001904811182151516611d51575b80820293611d3b578304143880611d0c565b634e487b7160e01b600052601260045260246000fd5b611d5961111d565b611d29565b6040516323b872dd60e01b602082019081526001600160a01b03928316602483015230604483015260648083019590955293815261114b936000938493909284919060a081016001600160401b03811182821017611dd1575b6040525193165af161143a611dca61145e565b80926114f0565b611dd9610861565b611db756fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 9503,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:44:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:88:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:57:17:after expr stmt semicolon',
    fs: [],
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
