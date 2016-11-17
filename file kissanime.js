//<![CDATA[
      function removeHtmlTag(strx,chop){if(strx.indexOf("<")!=-1){var s=strx.split("<");for(var i=0;i<s.length;i++)
      {if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length)}}strx=s.join("")}chop=(chop<strx.length-1)
      ?chop:strx.length-2;while(strx.charAt(chop-1)!=' '&&strx.indexOf(' ',chop)!=-1)chop++;strx=strx.substring(0,chop-1);return 
      strx+'...'}function masSummaryAndThumb(mas1,mas2){var div=document.getElementById(mas1);var imgtag="";var img=div.
      getElementsByTagName("img");if(img[0].id=='tr'){var filmturu='<div id="trdublaj"><img width="20px" height="20px" 
      src="https://lh5.googleusercontent.com/-8IzreS5cCv0/U5L7vZLFA8I/AAAAAAAAFPM/X0xG-NYGFo4/h120/tr.png" title="Bu bölümü 
      türkçe altyazılı izleyebilirsiniz"/></div>';}else if(img[0].id=='yeni') {var filmturu='<div id="trdublaj"><img width="30px"
      height="15px" src="https://lh5.googleusercontent.com/-UCRHnBsDrTI/U5L7vQvBfcI/AAAAAAAAFPY/uMvuLGI-uNY/h120/yeni.png" 
      title="Bu yeni bir dizidir."/></div>'}else if(img[0].id=='fragman') {var filmturu='<div id="trdublaj"><img width="65px" 
      height="65px" src="http://2.bp.blogspot.com/-w87gP7Q9cAM/U1a9uAMw8iI/AAAAAAAAE04/hM-lKHwX3Mg/s1600/fragman.png"
      alt="Bu filmi fragmanı mevcuttur."/></div>'}else if(img[0].id=='en') {var filmturu='<div id="trdublaj"><img width="20px" 
      height="20px" src="https://lh3.googleusercontent.com/-CeQYs0zEOh4/U5L7vUILEzI/AAAAAAAAFPU/SulcYL5UuP8/h120/en.png"
      title="Bu bölümü İngilizce altyazılı izleyebilirsiniz"/></div>'}else if(img[0].id=='sezon') {var filmturu='
      <div id="trdublaj"><img width="65px" height="20px"
      src="http://4.bp.blogspot.com/-PH-fDFsdGbc/U5mP-0sDKHI/AAAAAAAAFT8/DxvKge7kgQc/s1600/sezon.png" 
      alt="Bu filmi 720p olarak izleyebilirsiniz"/></div>'}else if(img[0].id=='final'){var filmturu='<div id="trdublaj">
      <img width="75px" height="29px" 
      src="http://3.bp.blogspot.com/-0xbwacHOESo/U483ADdkpnI/AAAAAAAAFAk/SWfI27E7Isg/s1600/final.png" alt="Bu film yerli yapımıdır"/>
      </div>'}else{var filmturu='';}var summ=600;if(img.length>=1){imgtag='<a href="'+mas2+'">
      <span style="float:left; padding:0px 0px 0px 0px;height:70px;"><img src="'+img[0].src+'" width="164px" height="104px"/>
      </span></a>';summ=600}var summary=imgtag+filmturu+'<div class="entry" style="text-indent:-9999px;">'+removeHtmlTag
      (div.innerHTML,summ)+'</div>';div.innerHTML=summary}
      //]]>
