var stats = {};
init();

function onChangeStat(field) {
  saveStat(field.getAttribute('id'), field.value);
}

// расчёт бонусного числа навыка
 function bonus(skillBonus) {
  var skill = Math.floor((skillBonus - 10) / 2);
  if (skill === 0) { // лучше использовать тройное сравнение
    skill = '';
  } else if (skill > 0) {
    skill = '+' + skill;
  }
  return skill;
}

 // расчёт только бонусного числа
function bonusNumber(skillBonus) {
  return Math.floor((skillBonus - 10) / 2);
}

function saveStat(k, value) {
  if (value !== getStat(k)) {

//перебор списка навыков
    if (window.skillsmass.includes(k)) {
      let skillsObjMassKeys = Object.keys(window.skillsObj);
      for (let i = 0; i < skillsObjMassKeys.length; i++) {
        if (window.skillsObj[skillsObjMassKeys[i]].includes(k)) {
          var bonusElemet = document.getElementById(plusDice(k));
          bonusElemet.innerHTML = bonus(stats[skillsObjMassKeys[i]]);
        }
      }

// условие для потверждения навыков и установки бонуса
      if (value) {
        document.getElementById(k).setAttribute('checked', true);
      } else {
        document.getElementById(k).removeAttribute('checked');
        var bonusElemet = document.getElementById(plusDice(k));
        bonusElemet.innerHTML = "";
      }

      if (getStat('characterBackground')) {
        let n = window.backgrounds[getStat('characterBackground')]['abilities'];
        let nKeys = Object.keys(n);
        if (nKeys.includes(k)) {
          if (value) {
            document.getElementById(k).setAttribute('disabled', true);
          } else {
            document.getElementById(k).removeAttribute('disabled');
          }
        }
      }
    }

    if (k == 'characterBackground') {
      if (getStat('characterBackground')) {
        let n = window.backgrounds[getStat('characterBackground')]['abilities'];
        let nKeys = Object.keys(n);
        for (var i = 0; i < nKeys.length; i++) {
          saveStat(nKeys[i], false);
        }
      }

      var selectedIdeal = window.ideal[value];
      var selectedIdealKeys = Object.keys(selectedIdeal);
      var background = document.getElementById('ideals');
      var forInnerHTML = '';
      for (var i = 0; i < selectedIdealKeys.length; i++) {
        forInnerHTML = forInnerHTML +
        '<input type="radio" ideal="' + selectedIdealKeys[i] + '" name="characterBackgroundIdeal" title="' +
        selectedIdeal[selectedIdealKeys[i]]['Описание'] + ' (' + selectedIdeal[selectedIdealKeys[i]]['Характер'] + ')' +
        '" '+  (selectedIdealKeys[i] == getStat('characterBackgroundIdeal') ? "checked" :'') + '   onchange="saveIdeal(this)"/>' +
        selectedIdealKeys[i];
      }

      background.innerHTML = forInnerHTML;

      var selectedFeature = window.feature[value];
      var backgroundFeature = document.getElementById('selectFeature');
      backgroundFeature.innerHTML = radioGroupe(selectedFeature, 'characterBackgroundFeature');
      backgroundFeature.value = getStat('characterBackgroundFeature');



      var selectedWeakness = window.weakness[value];
      var backgroundWeakness = document.getElementById('selectWeakness');
      backgroundWeakness.innerHTML = radioGroupe(selectedWeakness, 'characterBackgroundWeakness');
      backgroundWeakness.value = getStat('characterBackgroundWeakness');

    }

    if (k == "characterBackgroundIdeal") {
      var idealMass = document.getElementsByName('characterBackgroundIdeal');
      for (var i = 0; i < idealMass.length; i++) {
        if (idealMass[i].getAttribute('ideal') == value) {
          idealMass[i].setAttribute('checked', true);
        }
      }

    }


    let skillsObjMassKeys = Object.keys(window.skillsObj);

    function plusDice(k) {
      return k + 'DiceBonus';
    }

    if (skillsObjMassKeys.includes(k)) {
      document.getElementById(k).value = value;
      var bonusElemet = document.getElementById(plusDice(k));
      bonusElemet.innerHTML = bonus(value);
      for (let i = 0; i < window.skillsObj[k].length; i++) {
        if (getStat(window.skillsObj[k][i])) {
          var bonusElemet = document.getElementById(plusDice(window.skillsObj[k][i]));
          bonusElemet.innerHTML = bonus(value);
        }
      }
    }

    if(['characterName', 'currentHealth', 'generalHealth', 'playerName', 'choiceShild', 'notes', 'characterBackground'].includes(k)){
      document.getElementById(k).value = value;
    }

    if (k=='choiceArmory'){
      document.getElementById(k).value = value ;
      let selectedArmor;
      for (let i = 0; i< window.armor.length; i++){
        if ( window.armor[i]['title']==value){
          selectedArmor = window.armor[i];
        }
      }
    }


// создание селекта и его заполнение
    if ('characterWeapon' == k){
      let columnOptions = '';
      let weapon;
      for (let i=0; i<window.weapon.length; i++){
        weapon = window.weapon[i];
        columnOptions = columnOptions + '<option value = "'+ weapon.title +'">'+ weapon.title +'</option>';
      }
      let selected = '';
      for (let i=0; i<value.length; i++){
        selected = selected + '<select name="weapon"  onchange="saveWeapon(this)" >'+ columnOptions +'</select>';
      }
      document.getElementById('characterWeapon').innerHTML = selected + '<select name="weapon"  onchange="saveWeapon(this)" >'+ columnOptions +'</select>';
      let weaponHtmlByName = document.getElementsByName('weapon');

      for (let i=0; i<value.length; i++){
        weaponHtmlByName[i].value=value[i];
      }
      weaponHtmlByName[weaponHtmlByName.length-1].value='нет оружия';
    }

// создание поля ввода для снаряжения
    if (k == 'equipment'){
      let introducedDoc = document.getElementById('introduced');
      let stings = '';
      for (let i = 0; i < value.length; i++){
        stings = stings + '<div style="display:flex;">' + '<input name = "newEquipment" placeholder = "название" onchange = "saveEquipment(this)" value = "' + value[i]['name'] + '"></input>'+
        '<input type = "number" class="widthSize" placeholder = "вес" name = "equipmentWeight" onchange = "saveEquipment(this)" value = "' + value[i]['weight'] + '"></input>'+
        '<button type="button" name="buttonDelete" onclick="deleteEquipment('+ i +')">x</button>' + '</div>';
      }
      introducedDoc.innerHTML = stings;
      if (value.length == 0 || (value[value.length-1]['weight'] && value[value.length-1]['name'])){
        introducedDoc.innerHTML = '<div>' + stings +  '<input name = "newEquipment" placeholder = "название" onchange = "saveEquipment(this)"></input>' +
        '<input type = "number" class="widthSize" placeholder = "вес" name = "equipmentWeight" onchange = "saveEquipment(this)"></input>' + '</div>';
      }
    }

// сохранение в браузер
    if(k == 'characterName' || k == 'playerName'){
      localStorage.removeItem(localStorage.getItem('lastPage'));
    }

    stats[k] = value;
    afterSaveStat(k, value);

  }
  console.log(stats);
}

//
function getAbilities (klass, level, way){
  var ability = document.getElementById("ability");
  var abilityMass = [];
  var tx=""
  for (let i = 0; i < parseInt(level, 10); i++) {
    abilityMass.push(window.ability[klass]['levels'][getLevel(i + 1)]);
  }
  abilityMass = abilityMass.flat().filter(el => el['Путь'] == way || !el['Путь']);
  ability.innerHTML = abilityMass.flat().map(function (el) { return '<div onclick="clicky(\''+ btoa(unescape(encodeURIComponent(el['Описание']))) +'\',this)">'
  + el['Способность'] +'<div class="descriptionAbility descriptionAbilityHiden"></div></div>'}).join('');
}

function getWay(){

}

function getStat(key) {
  return stats[key];
}

function afterSaveStat(k, value) {

// вытаскивание аватарки из stat
  if (k == 'avatar'){
    if (getStat('avatar')){
      document.getElementById('avatar').src = getStat('avatar');
    }
  }


  if (k == 'characterClass' || k == 'characterWay' || k =='characterLevel'){
    document.getElementById(k).value = getStat(k);
    if (getStat('characterLevel') || getStat('characterClass') || getStat('characterWay')){
      getAbilities(getStat('characterClass'), getStat('characterLevel'), getStat('characterWay'));
    }
  }


// сохранение в браузер
  if(getStat('characterName') && getStat('playerName')){
    let pageid = getStat('characterName') + ' - ' + getStat('playerName');
    localStorage.setItem('lastPage',pageid);
    localStorage.setItem(pageid, JSON.stringify(stats));
    changeList();
  }


  if (k == 'characterBackground') {
    let backgroundAbilities = window.backgrounds[value]['abilities'];
    let backgroundAbilitiesKeys = Object.keys(backgroundAbilities);
    for (var i = 0; i < backgroundAbilitiesKeys.length; i++) {
      saveStat(backgroundAbilitiesKeys[i], true);
    }
  }

  if (k=='characterLevel'){
    let bonusMasters='';
    if(parseInt(value)<=4){
      bonusMasters='2';
    }else if (parseInt(value)<=8){
      bonusMasters='3';
    }else if (parseInt(value)<=12){
      bonusMasters='4';
    }else if (parseInt(value)<=16){
      bonusMasters='5';
    }else if(parseInt(value)<=20){
      bonusMasters='6';
    }
    document.getElementById('bonusMaster').innerHTML ='БМ ' + bonusMasters ;
    saveStat('bonusMaster', bonusMasters);
  }


//расчет кд и веса
  var w;
  var armorWeight = 0;
  if (getStat('characterClass')){
    w = window.ability[getStat('characterClass')]['devenseWithoutArmor'];
  }
  if ((w && w.includes(k)) || k == 'choiceArmory' || k == 'characterClass'){
    if(getStat('choiceArmory') && getStat('characterAgility') && getStat('characterClass')){
      var totalWeightArmor = 0;
      var totalKAArmor = 0;
      var agilityMod = 0;
      var bdcArmor = 0;
      var armorBonus = 0;
      var massArmors = 0;
      var shildBdc = 0;
      var wBonus = 0;
      for (let i = 0; i< window.armor.length; i++){
        if ( window.armor[i]['title'] == getStat('choiceArmory')){
          massArmors = window.armor[i];
          armorWeight = massArmors.weight;
        }
      }
      agilityMod =parseInt(massArmors['maxAgilityMod']);
      bdcArmor =parseInt(massArmors['bdc']);
      if (massArmors['useAgility']){
        armorBonus =parseInt(bonusArmor(getStat('characterAgility')));
      }
      if (getStat('choiceShild')){
        var shildWeight = 0;
        for(let i = 0; i < window.shild.length; i++){
          if(window.shild[i]['title'] == getStat('choiceShild')){
            shildBdc = parseInt(window.shild[i]['bdc']);
          }
        }
      }
      if (window.ability[getStat('characterClass')]['devenseWithoutArmor'] && getStat('choiceArmory') == 'нет брони'){
        wBonus = w.map(skill => parseInt(bonusNumber(getStat(skill)))).reduce((previousValue,currentValue) => previousValue+currentValue);
        document.getElementById('klassArmor').innerHTML = 'КД: ' + (wBonus + shildBdc + 10);
      }else if (getStat('choiceArmory')){
        totalKAArmor = agilityMod + bdcArmor + armorBonus;
        document.getElementById('klassArmor').innerHTML = 'КД: ' + (totalKAArmor + shildBdc);
      }
      }}

      if (getStat('choiceShild')){
        var shildWeight = 0;
        for(let i = 0; i < window.shild.length; i++){
          if(window.shild[i]['title'] == getStat('choiceShild')){
            shildWeight = window.shild[i]['weight'];
            shildBdc = window.shild[i]['bdc'];
          }
        }
      }

      if (getStat('equipment')){
        var equipWeight = 0;
        var massEquip;
        var massEquipWeight;
        for (let i = 0; i < getStat('equipment').length; i++){
          massEquipWeight = getStat('equipment')[i].weight;
          massEquip = getStat('equipment')[i].name;
          if (massEquipWeight !== ''){
            equipWeight = parseInt(equipWeight) + parseInt(massEquipWeight);
          }
        }
      }

<<<<<<< Updated upstream
// 
=======
// расчет урона оружия
>>>>>>> Stashed changes
      if(getStat('characterWeapon')){
        var weaponArray = getStat('characterWeapon');
        var damages = '';
        for(let i=0; i<window.weapon.length;i++){
          var weapon = window.weapon[i].title;
          var weaponDamage = window.weapon[i].damage;
          for(let i=0; i<weaponArray.length; i++)
          if(weaponArray[i] == weapon){
            damages = damages + '<div>' + weaponDamage + '</div>';

          }
        }
        document.getElementById('damageWeapon').innerHTML = damages;
      }
// расчет веса оружия
      if (getStat('characterWeapon')){
        var weaponWeight = 0;
        var massWeapon;
        var massWeaponWeight;
        for (let i = 0; i <window.weapon.length ; i++){
          massWeapon = window.weapon[i].title;
          massWeaponWeight = window.weapon[i].weight;
          for (let i = 0; i < getStat('characterWeapon').length ; i++){
            if (massWeapon == getStat('characterWeapon')[i]){
              weaponWeight = parseInt(weaponWeight) + parseInt(massWeaponWeight);
            }
          }

        }
      }

      document.getElementById('totalWeight').innerHTML = 'Общий вес ' + (parseInt(armorWeight) + parseInt(weaponWeight) + shildWeight + equipWeight);

// вывод способностей по выбору пути, вывод селекта с путями
      if ((k == 'characterClass' || k == 'characterLevel') && (getStat('characterClass') && getStat('characterLevel'))){
        var stringg = '';
        for (let i = 0; i < Object.keys(window.ways)['length']; i++){
          if (Object.keys(window.ways)[i] == stats['characterClass'] && window.ways[stats['characterClass']]['startLevel'].substring(5) <= stats['characterLevel']){
            var wayss = window.ways[Object.keys(window.ways)[i]];
            for (let i = 0; i < wayss['ways']['length']; i++){
              stringg = stringg + '<option value="'+ wayss['ways'][i] +'">'+ wayss['ways'][i] +'</option>'
            }
          }
        }
        if (stringg !== ''){
          document.getElementById('characterWay').innerHTML = '<select onchange="saveStat(\'characterWay\',this.value)">'+ stringg +'</select>'
        }else{
          document.getElementById('characterWay').innerHTML = '';
        }
      }

    }


    function bonusArmor(agility){
      let skiLL = Math.floor((agility - 10) / 2);
      return skiLL;
    }



     function clicky(tr, rootElement){
      let r = rootElement.getElementsByClassName('descriptionAbility')[0];
      if (r.classList.contains('descriptionAbilityHiden')){
        r.innerHTML = decodeURIComponent(escape(atob(tr)));
      }else{
        r.innerHTML = '';
      }
      r.classList.toggle('descriptionAbilityHiden');
    }

    function deleteEquipment(index){
      delete getStat('equipment')[index];
      let equipmentArray = [];
      for(let i = 0; i < getStat('equipment').length; i++){
        if(index != i){
          equipmentArray.push(getStat('equipment')[i]);
        }
      }
      saveStat("equipment", equipmentArray);
    }




    function saveEquipment(){
      let equipmentHtml = document.getElementsByName('newEquipment');
      let equipmentWeightHtml = document.getElementsByName('equipmentWeight');
      let massEquipmwent = [];
      for(i=0; i < equipmentHtml.length; i++){
        if (equipmentHtml[i].value || equipmentWeightHtml[i].value){
          massEquipmwent.push ({name:equipmentHtml[i].value, weight:equipmentWeightHtml[i].value});
        }
      }
      saveStat('equipment', massEquipmwent );
    }

    function saveWeapon (){
      let weaponHtml = document.getElementsByName('weapon');
      let massWeapons = [];
      for (i=0;i<weaponHtml.length;i++){
        if (weaponHtml[i].value !=='' && weaponHtml[i].value !== 'нет оружия'){
          massWeapons.push(weaponHtml[i].value);
        }
      }
      saveStat('characterWeapon', massWeapons );
    }

    function onSaveBackground(select) {
      saveStat(select.getAttribute('id'), select.value);
    }

    function saveIdeal(input) {
      saveStat('characterBackgroundIdeal', input.getAttribute('ideal'));
    }

    function onSaveField(field){
      saveStat(field.getAttribute('id'), field.value);
    }

    function onChangeSkills(checkbox) {
      saveStat(checkbox.getAttribute('id'), checkbox.checked);
    }

    function getLevel(field) {
      return 'level' + field;

    }

    function radioGroupe(options, groupName) {
      let  radioGroupeOptions = '';
      for (var i = 0; i < options.length; i++) {
        radioGroupeOptions = radioGroupeOptions +
        '<option name="' + groupName + '">' + options[i] + '</option>';
      }
      return radioGroupeOptions;
    }

    function loadPage(value){
      if(value == 'new'){
        localStorage.removeItem('lastPage');
      }else{
        localStorage.setItem('lastPage', value);
      }
      location.reload();
    }

    function deletePage(){
      let pageid = localStorage.getItem('lastPage');
      localStorage.removeItem('lastPage');
      localStorage.removeItem(pageid);
      location.reload();
    }

    function changeList(){
      let characterOption = document.getElementById('characterOption');
      let keysOption = Object.keys(localStorage);
      let o ='';
      for(let i = 0; i < keysOption.length; i++){
        let k = keysOption[i];
        o = o + '<option value="'+ k +'">'+ k +'</option>' ;
      }
      characterOption.innerHTML = o + '<option value="new">новый персонаж</option>';
      if(localStorage.getItem('lastPage')){
        characterOption.value = localStorage.getItem('lastPage');
      }else{
        characterOption.value = 'new';
      }
    }


// загрузка options с доспехами и щитами
    function init(){
      let choiceArmoryHtml = document.getElementById('choiceArmory');
      let massChoiceArmory = [];
      for(let i = 0; i < window.armor.length; i++ ){
        massChoiceArmory.push('<option value = "' + window.armor[i].title + '">'+ window.armor[i].armorType + ' ' + window.armor[i].title + '</option>');
      }
      choiceArmoryHtml.innerHTML = massChoiceArmory.join();

      let choiceShildHtml = document.getElementById('choiceShild');
      let massChoiceShild = '';
      for (let i = 0; i<window.shild.length; i++ ){
        massChoiceShild = massChoiceShild + '<option value = "' + window.shild[i].title + '">' + window.shild[i].armorType + ' ' + window.shild[i].title + ' </option>';
        if(window.shild[1].title == getStat('choiceShild')){
          shildWeight = window.shild[i].weight;
        }
      }
      choiceShildHtml.innerHTML = massChoiceShild;

// сохранение в браузер 
      if(!localStorage.getItem('lastPage')){
        saveStat('choiceShild', 'нет щита');
        saveStat('characterBackgroundIdeal', 'Милосердие');
        saveStat('characterBackgroundFeature', 'Я идеализирую конкретного героя своей веры и постоянно ссылаюсь на его поступки и свершения');
        saveStat('characterBackgroundWeakness', 'Я не проявляю снисходительности к другим, но к себе я ещё более суров');
        saveStat('characterBackground', "Прислужник");
        saveStat('characterStrangth', '10');
        saveStat('characterAgility', '10');
        saveStat('characterPhysique', '10');
        saveStat('characterIntellect', '10');
        saveStat('characterSapience', '10');
        saveStat('characterCharisma', '10');
        saveStat('characterClass', 'Монах');
        saveStat('characterLevel', '1');
        saveStat('characterName', '');
        saveStat('playerName', '');
        saveStat('characterWeapon', ["булава","кинжал","ручной топор"]);
        saveStat('choiceArmory', 'нет брони');
        saveStat('equipment',[]);
      }else {
        let pageid = localStorage.getItem('lastPage');
        let stats = JSON.parse(localStorage.getItem(pageid));
        let keysStats = Object.keys(stats);
        for(let i = 0; i < keysStats.length; i++){
          let k = keysStats[i];
          saveStat(k,stats[k]);
        }
      }
      changeList();
    };

// загрузка аватарки
    function loadFile(input){
      const fileReader = new FileReader();
      fileReader.addEventListener('load', (event) => {
        var e = event.target.result;
        saveStat('avatar', e);
      });
      fileReader.readAsDataURL(input.files[0]);
    }

    // function freeMemory(image){
    //     URL.revokeObjectURL(image.src);
    // }
    // btoa(unescape(encodeURIComponent('Сережа')))
    // decodeURIComponent(escape(atob("0KHQtdGA0LXQttCw")))
    // let yr = [4,9,5,6,3,5,4,3,6];
    // let y;
    // let m;
    // for (let i = 0; i<yr.length;i++){
    //   y = yr[i];
    //   for(let q = 0; q<yr.length;q++){
    //     m = yr[q];
    //     if (y==m){
    //       let l = m;
    //       console.log(l);
    //     }
    //   }
    // };
