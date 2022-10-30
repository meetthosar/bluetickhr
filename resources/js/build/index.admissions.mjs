// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (0b231964)';
export const _backendVersion = 25;

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
    stdlib.protect(ctc0, await interact.notifyStudent(true), {
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
                "name": "v694",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v695",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v696",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v697",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v698",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v699",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v700",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v694",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v695",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v696",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v697",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v698",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v699",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v700",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
        "internalType": "struct T12",
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
                "internalType": "struct T13",
                "name": "v804",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
                "name": "v873",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v845",
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
    "name": "_reach_oe_v876",
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
        "internalType": "struct T12",
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
                "internalType": "struct T13",
                "name": "v804",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
                "name": "v873",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
  Bytecode: `0x60806040526040516200299e3803806200299e833981016040819052620000269162000500565b600080554360035562000038620002cf565b7fededbc0610b434ff35d916c3af6dc3955e77560206a2a4269d503724f7b233433383604051620000d992919060006101208201905060018060a01b038085168352835160208401526020840151818151166040850152602081015115156060850152604081015160808501528160608201511660a0850152608081015160c085015260a081015160e085015260c081015161010085015250509392505050565b60405180910390a180516000908190528151602090810182905282516040908101839052835182850180519190915280518251606081018452858152825151850151948101949094529051518201511515918301919091526200013e92909162000222565b6040820152620001513415600a620002a5565b6200015b62000316565b33815260208084018051516001600160a01b0390811683850152815183015115156040808601919091528251810151606080870191909152835101519091166080808601919091528251015160a0808601919091528251015160c08086019190915291519091015160e084015243610100840181905284820151610120850152600160008190555551620001f29183910162000613565b604051602081830303815290604052600290805190602001906200021892919062000388565b505050506200072a565b6200022c62000417565b60005b600181101562000282578481600181106200024e576200024e620005b7565b6020020151828260018110620002685762000268620005b7565b6020020152806200027981620006c3565b9150506200022f565b5081818460018110620002995762000299620005b7565b60200201529392505050565b81620002cb5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160c081019091526000606082018181526080830182905260a08301919091528152602081016200030262000417565b81526020016200031162000417565b905290565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000151581526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016200031162000417565b8280546200039690620006ed565b90600052602060002090601f016020900481019282620003ba576000855562000405565b82601f10620003d557805160ff191683800117855562000405565b8280016001018555821562000405579182015b8281111562000405578251825591602001919060010190620003e8565b506200041392915062000464565b5090565b60405180602001604052806001905b6200044d604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004265790505090565b5b8082111562000413576000815560010162000465565b604080519081016001600160401b0381118282101715620004ac57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e081016001600160401b0381118282101715620004ac57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620004fb57600080fd5b919050565b60008183036101008112156200051557600080fd5b6200051f6200047b565b8351815260e0601f19830112156200053657600080fd5b62000540620004b2565b91506200055060208501620004e3565b8252604084015180151581146200056657600080fd5b6020830152606084015160408301526200058360808501620004e3565b606083015260a0840151608083015260c084015160a083015260e084015160c0830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b8060005b60018110156200060d578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101620005d1565b50505050565b81516001600160a01b03168152610180810160208301516200064060208401826001600160a01b03169052565b50604083015162000655604084018215159052565b506060830151606083015260808301516200067b60808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151620006bb82850182620005cd565b505092915050565b6000600019821415620006e657634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200070257607f821691505b602082108114156200072457634e487b7160e01b600052602260045260246000fd5b50919050565b612264806200073a6000396000f3fe6080604052600436106100a55760003560e01c80635ea7ac13116100615780635ea7ac1314610175578063723a06a51461018a5780638323075714610192578063a98bf223146101a7578063ab53f2c6146101ba578063de6b8e0f146101dd57005b80631e93b0f1146100ae578063207d5c23146100d25780632c10a159146100e55780633bc5b7bf146100f85780633d154312146101255780634f78b4131461015257005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100e0366004611a4e565b6101f2565b6100ac6100f3366004611a78565b610222565b34801561010457600080fd5b50610118610113366004611aa9565b61024e565b6040516100c99190611adc565b34801561013157600080fd5b5061013a61027a565b6040516001600160a01b0390911681526020016100c9565b610165610160366004611b23565b61028c565b60405190151581526020016100c9565b34801561018157600080fd5b5061013a6102a3565b6101656102af565b34801561019e57600080fd5b506001546100bf565b6100ac6101b5366004611a78565b6102be565b3480156101c657600080fd5b506101cf6102ea565b6040516100c9929190611b90565b3480156101e957600080fd5b5061013a610387565b604080518082019091526000808252602082015261021e61021836849003840184611c97565b82610393565b5050565b604080518082019091526000808252602082015261021e61024836849003840184611d45565b8261078b565b604080516060810182526000808252602082018190529181019190915261027482610a2b565b92915050565b60008061028681610b04565b91505090565b6000610299848484610c84565b90505b9392505050565b60008061028681610ce0565b60006102b9610e5f565b905090565b604080518082019091526000808252602082015261021e6102e436849003840184611d7d565b82610e9a565b6000606060005460028080546102ff90611dd7565b80601f016020809104026020016040519081016040528092919081815260200182805461032b90611dd7565b80156103785780601f1061034d57610100808354040283529160200191610378565b820191906000526020600020905b81548152906001019060200180831161035b57829003601f168201915b50505050509050915091509091565b600080610286816110dd565b6103a36004600054146015611258565b81516103be9015806103b757508251600154145b6016611258565b6000808055600280546103d090611dd7565b80601f01602080910402602001604051908101604052809291908181526020018280546103fc90611dd7565b80156104495780601f1061041e57610100808354040283529160200191610449565b820191906000526020600020905b81548152906001019060200180831161042c57829003601f168201915b50505050508060200190518101906104619190611eab565b90506104796040518060200160405280600081525090565b61048a8260a0015143106017611258565b604080513381528551602080830191909152808701515180516001600160a01b0390811684860152918101519091166060830152820151608082015290517f4811908c578d6932e4701ee728daff6d22384791a8f9b3a10a37d0814bf7ecba9181900360a00190a1610521846020015160000151602001516001600160a01b031683602001516001600160a01b0316146010611258565b602084015151516105609060019061053890610a2b565b51600181111561054a5761054a611ac6565b14610556576001610559565b60005b6011611258565b61057d846020015160000151604001518360400151146012611258565b8151602085015151516105ad916001600160a01b039182169116146105a35760016105a6565b60005b6013611258565b602084015151604001516105c49034146014611258565b604051600181527f6a7ea4e0d875020b16993fbecc1ca6ee92d1065cbb0d17b9e98b34ec5ce445d79060200160405180910390a160018084526020858101805151516001600160a01b03908116600090815260049093526040808420805460ff191690951790945581515151168252919020805462ff000019169055606083015190515151608084015161065992919061127e565b6106698261012001516001611297565b815261067361178a565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201526060808701805186519086169083015260808089018051885183015260a0808b015189518201528951878a018051911515909152805133908901528d880151518801518151908a1690880152935184519816978501979097528851835190920191909152905143950194909452610140870180518351928301845281515151955190950382528051518401519382019390935291516107559392600092909190820190835b602002015160400151151590526112e6565b60208083015160c0019190915261016084015190860151516040015101602082015160e001526107848161135a565b5050505050565b61079b600160005414600e611258565b81516107b69015806107af57508251600154145b600f611258565b6000808055600280546107c890611dd7565b80601f01602080910402602001604051908101604052809291908181526020018280546107f490611dd7565b80156108415780601f1061081657610100808354040283529160200191610841565b820191906000526020600020905b81548152906001019060200180831161082457829003601f168201915b50505050508060200190518101906108599190611f8d565b90506108716040518060200160405280600081525090565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16108ca8260c001518360a001516114ea565b81526108d83415600b611258565b6108f56108ee3384608001518460000151611549565b600c611258565b815161090d906001600160a01b03163314600d611258565b61091561178a565b825181516001600160a01b039182169052602080850151835190831691015260608085015183516040015260808086015184519316929091019190915260a084015182519091015261010083015160e08401516109729190611557565b815160a09081019190915260408481015160208085018051921515909252865182516001600160a01b0391821690830152818801518351908216908501526080808901518451921660609283015260c089015184519091015291514394019390935261012086018051835192830184528151515187510183528151518501519483019490945251610a0c9392600092919082019083610743565b60208201805160c0019190915251600060e0909101526107848161135a565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610a7757610a77611ac6565b1415610af4576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610ab857610ab8611ac6565b6001811115610ac957610ac9611ac6565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b600060016000541415610bc157600060028054610b2090611dd7565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4c90611dd7565b8015610b995780601f10610b6e57610100808354040283529160200191610b99565b820191906000526020600020905b815481529060010190602001808311610b7c57829003601f168201915b5050505050806020019051810190610bb19190611f8d565b9050610bbf60006007611258565b505b60046000541415610c7857600060028054610bdb90611dd7565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0790611dd7565b8015610c545780601f10610c2957610100808354040283529160200191610c54565b820191906000526020600020905b815481529060010190602001808311610c3757829003601f168201915b5050505050806020019051810190610c6c9190611eab565b61010001519392505050565b610aff60006007611258565b6000610c8e6117d5565b60208082018051516001600160a01b0380891690915281515190871690830152515160409081018590528051808201909152600080825291810191909152610cd68282610393565b5195945050505050565b600060016000541415610d9d57600060028054610cfc90611dd7565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2890611dd7565b8015610d755780601f10610d4a57610100808354040283529160200191610d75565b820191906000526020600020905b815481529060010190602001808311610d5857829003601f168201915b5050505050806020019051810190610d8d9190611f8d565b9050610d9b60006008611258565b505b60046000541415610e5357600060028054610db790611dd7565b80601f0160208091040260200160405190810160405280929190818152602001828054610de390611dd7565b8015610e305780601f10610e0557610100808354040283529160200191610e30565b820191906000526020600020905b815481529060010190602001808311610e1357829003601f168201915b5050505050806020019051810190610e489190611eab565b60c001519392505050565b610aff60006008611258565b6000610e6961180e565b6020808201516000908190526040805180820190915281815291820152610e908282610e9a565b6020015192915050565b610eaa6004600054146019611258565b8151610ec5901580610ebe57508251600154145b601a611258565b600080805560028054610ed790611dd7565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0390611dd7565b8015610f505780601f10610f2557610100808354040283529160200191610f50565b820191906000526020600020905b815481529060010190602001808311610f3357829003601f168201915b5050505050806020019051810190610f689190611eab565b9050610f7c8160a00151431015601b611258565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a1610fd034156018611258565b604051600181527f4c253465b85019190f383e0d1ea2392adca671282809a76f69d38bd3ec5820449060200160405180910390a16001602083015261101361178a565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451820152606080860151855190851690820152608080870151865182015260a080880151875182015284870180516000905260c0808a0151825190891697019690965260e0808a01518251908916960195909552610100890151815197169690930195909552610120870151825190910152805143940193909352610140850151835190920191909152610160840151915101526110d78161135a565b50505050565b60006001600054141561119a576000600280546110f990611dd7565b80601f016020809104026020016040519081016040528092919081815260200182805461112590611dd7565b80156111725780601f1061114757610100808354040283529160200191611172565b820191906000526020600020905b81548152906001019060200180831161115557829003601f168201915b505050505080602001905181019061118a9190611f8d565b905061119860006009611258565b505b60046000541415611250576000600280546111b490611dd7565b80601f01602080910402602001604051908101604052809291908181526020018280546111e090611dd7565b801561122d5780601f106112025761010080835404028352916020019161122d565b820191906000526020600020905b81548152906001019060200180831161121057829003601f168201915b50505050508060200190518101906112459190611eab565b60e001519392505050565b610aff600060095b8161021e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6112898383836115a4565b61129257600080fd5b505050565b6000826112a4838261204a565b91508111156102745760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401611275565b6112ee611838565b60005b600181101561133a5784816001811061130c5761130c611f77565b602002015182826001811061132357611323611f77565b60200201528061133281612061565b9150506112f1565b508181846001811061134e5761134e611f77565b60200201529392505050565b60208101515161136b576000611378565b6000816020015160800151115b1561146657611385611883565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151818501528451606090810151841681860152855160809081015181870152865160a090810151908701528387018051850151861660c0808901919091528151850151871660e0808a01919091528251909401519096166101008801528051909101516101208701528051909401516101408601529251909201516101608401526004600055436001559051611442918391016120ba565b60405160208183030381529060405260029080519060200190611292929190611920565b805160608101516020918201519183015160c001515151611487929061127e565b8060000151602001516001600160a01b03166108fc826020015160e001519081150290604051600060405180830381858888f193505050501580156114d0573d6000803e3d6000fd5b50600080805560018190556114e7906002906119a4565b50565b600081158061150e57508282611500818361219c565b925061150c90836121bb565b145b6102745760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611275565b600061029983853085611675565b60008261156483826121dd565b91508110156102745760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611275565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611603916121f5565b60006040518083038185875af1925050503d8060008114611640576040519150601f19603f3d011682016040523d82523d6000602084013e611645565b606091505b50915091506116568282600261174f565b508080602001905181019061166b9190612211565b9695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916116dc916121f5565b60006040518083038185875af1925050503d8060008114611719576040519150601f19603f3d011682016040523d82523d6000602084013e61171e565b606091505b509150915061172f8282600161174f565b50808060200190518101906117449190612211565b979650505050505050565b6060831561175e57508161029c565b82511561176e5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611275565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820192909252908152602081016117d06119de565b905290565b6040518060400160405280600081526020016117d060408051608081018252600060208201818152928201819052606082015290815290565b6040518060400160405280600081526020016117d060405180602001604052806000151581525090565b60405180602001604052806001905b61186d604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816118475790505090565b60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001611913611838565b8152602001600081525090565b82805461192c90611dd7565b90600052602060002090601f01602090048101928261194e5760008555611994565b82601f1061196757805160ff1916838001178555611994565b82800160010185558215611994579182015b82811115611994578251825591602001919060010190611979565b506119a0929150611a39565b5090565b5080546119b090611dd7565b6000825580601f106119c0575050565b601f0160209004906000526020600020908101906114e79190611a39565b60405180610100016040528060001515815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001611913611838565b5b808211156119a05760008155600101611a3a565b600060808284031215611a6057600080fd5b50919050565b600060408284031215611a6057600080fd5b600060408284031215611a8a57600080fd5b61029c8383611a66565b6001600160a01b03811681146114e757600080fd5b600060208284031215611abb57600080fd5b813561029c81611a94565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611b0157634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b600080600060608486031215611b3857600080fd5b8335611b4381611a94565b92506020840135611b5381611a94565b929592945050506040919091013590565b60005b83811015611b7f578181015183820152602001611b67565b838111156110d75750506000910152565b8281526040602082015260008251806040840152611bb5816060850160208701611b64565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715611c0357611c03611bca565b60405290565b6040516060810167ffffffffffffffff81118282101715611c0357611c03611bca565b6040805190810167ffffffffffffffff81118282101715611c0357611c03611bca565b604051610180810167ffffffffffffffff81118282101715611c0357611c03611bca565b604051610140810167ffffffffffffffff81118282101715611c0357611c03611bca565b60008183036080811215611caa57600080fd5b6040516040810181811067ffffffffffffffff82111715611ccd57611ccd611bca565b604052833581526060601f1983011215611ce657600080fd5b611cee611be0565b9150611cf8611c09565b6020850135611d0681611a94565b81526040850135611d1681611a94565b60208281019190915260609590950135604082015282529283015250919050565b80151581146114e757600080fd5b600060408284031215611d5757600080fd5b611d5f611c2c565b823581526020830135611d7181611d37565b60208201529392505050565b60008183036040811215611d9057600080fd5b611d98611c2c565b833581526020601f1983011215611dae57600080fd5b611db6611be0565b91506020840135611dc681611d37565b825260208101919091529392505050565b600181811c90821680611deb57607f821691505b60208210811415611a6057634e487b7160e01b600052602260045260246000fd5b8051610aff81611a94565b8051610aff81611d37565b600082601f830112611e3357600080fd5b611e3b611be0565b80606080850186811115611e4e57600080fd5b855b81811015611e9f57828189031215611e685760008081fd5b611e70611c09565b8151815260208083015181830152604080840151611e8d81611d37565b90830152908652909401938201611e50565b50919695505050505050565b60006101c08284031215611ebe57600080fd5b611ec6611c4f565b611ecf83611e0c565b8152611edd60208401611e0c565b602082015260408301516040820152611ef860608401611e0c565b60608201526080830151608082015260a083015160a0820152611f1d60c08401611e0c565b60c0820152611f2e60e08401611e0c565b60e0820152610100611f41818501611e0c565b908201526101208381015190820152610140611f5f85828601611e22565b908201526101a0929092015161016083015250919050565b634e487b7160e01b600052603260045260246000fd5b60006101808284031215611fa057600080fd5b611fa8611c73565b611fb183611e0c565b8152611fbf60208401611e0c565b6020820152611fd060408401611e17565b604082015260608301516060820152611feb60808401611e0c565b608082015260a083015160a082015260c083015160c082015260e083015160e082015261010080840151818301525061012061202985828601611e22565b908201529392505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561205c5761205c612034565b500390565b600060001982141561207557612075612034565b5060010190565b8060005b60018110156110d7578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612080565b81516001600160a01b031681526101c0810160208301516120e660208401826001600160a01b03169052565b5060408301516040830152606083015161210b60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015161213a60c08401826001600160a01b03169052565b5060e083015161215560e08401826001600160a01b03169052565b50610100838101516001600160a01b0316908301526101208084015190830152610140808401516121888285018261207c565b50506101608301516101a083015292915050565b60008160001904831182151516156121b6576121b6612034565b500290565b6000826121d857634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156121f0576121f0612034565b500190565b60008251612207818460208701611b64565b9190910192915050565b60006020828403121561222357600080fd5b815161029c81611d3756fea2646970667358221220d6048da67802fb9ef19f19b2d3f0229af9e86e3c60e3076a95c6adee68865ccc64736f6c634300080c0033`,
  BytecodeLen: 10654,
  Which: `oD`,
  version: 8,
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
