var showHideData = {
  '1': 'frfc srtc trfc',
  '2': 'frfc frtc srsc trfc',
  '3': 'srfc trfc',
  '4': 'trfc trsc',
  '5': 'secondrow',
};

function evtChange (e, allids) {
  var val = e.value;
  allids.forEach(id => {
    el = document.getElementById(id)
    el.style.visibility = 'hidden';
  });
  showHideData[val].split(' ').forEach(id => {
    el = document.getElementById(id)
    el.style.visibility = '';
    Array.from(el.children).forEach(child => {
      child.style.visibility = '';
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  sels = document.getElementsByClassName('changeDivs');
  Array.from(sels).forEach(sel => {
    div = sel.dataset.changeDiv;
    alldivs = document.getElementById(div);
    var allnodes = Array.from(alldivs.children).map(x => Array.from(x.children));
    allids = allnodes.reduce((a, b) => a.concat(b), []).map(x => x.id);
    allids.forEach(id => {
      el = document.getElementById(id)
      el.style.visibility = 'hidden';
    });
    // sel.addEventListener('change', evtChange(sel, allids));
    sel.onchange = function () {
      evtChange(sel, allids);
    };
  });
});
