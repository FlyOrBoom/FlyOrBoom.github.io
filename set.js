var a=0,b=0,c=0,n1=0,n2=0,n3=0,d=0,e=0,f=0,g=0,h=0,i=0,num=0,nom=0,nam=0,x=0,z=0,on=[],visi=[],visc=[],card=["a1dg","a1dh","a1di","a1eg","a1eh","a1ei","a1fg","a1fh","a1fi","a2dg","a2dh","a2di","a2eg","a2eh","a2ei","a2fg","a2fh","a2fi","a3dg","a3dh","a3di","a3eg","a3eh","a3ei","a3fg","a3fh","a3fi","b1dg","b1dh","b1di","b1eg","b1eh","b1ei","b1fg","b1fh","b1fi","b2dg","b2dh","b2di","b2eg","b2eh","b2ei","b2fg","b2fh","b2fi","b3dg","b3dh","b3di","b3eg","b3eh","b3ei","b3fg","b3fh","b3fi","c1dg","c1dh","c1di","c1eg","c1eh","c1ei","c1fg","c1fh","c1fi","c2dg","c2dh","c2di","c2eg","c2eh","c2ei","c2fg","c2fh","c2fi","c3dg","c3dh","c3di","c3eg","c3eh","c3ei","c3fg","c3fh","c3fi"],r=0,a1dg=0,a1dh=0,a1di=0,a1eg=0,a1eh=0,a1ei=0,a1fg=0,a1fh=0,a1fi=0,a2dg=0,a2dh=0,a2di=0,a2eg=0,a2eh=0,a2ei=0,a2fg=0,a2fh=0,a2fi=0,a3dg=0,a3dh=0,a3di=0,a3eg=0,a3eh=0,a3ei=0,a3fg=0,a3fh=0,a3fi=0,b1dg=0,b1dh=0,b1di=0,b1eg=0,b1eh=0,b1ei=0,b1fg=0,b1fh=0,b1fi=0,b2dg=0,b2dh=0,b2di=0,b2eg=0,b2eh=0,b2ei=0,b2fg=0,b2fh=0,b2fi=0,b3dg=0,b3dh=0,b3di=0,b3eg=0,b3eh=0,b3ei=0,b3fg=0,b3fh=0,b3fi=0,c1dg=0,c1dh=0,c1di=0,c1eg=0,c1eh=0,c1ei=0,c1fg=0,c1fh=0,c1fi=0,c2dg=0,c2dh=0,c2di=0,c2eg=0,c2eh=0,c2ei=0,c2fg=0,c2fh=0,c2fi=0,c3dg=0,c3dh=0,c3di=0,c3eg=0,c3eh=0,c3ei=0,c3fg=0,c3fh=0,c3fi=0;function hide(e){document.getElementById(e).style.display="none",visi.remove(visc.indexOf(e)),visc.remove(e)}function open(e){document.getElementById(e).style.display="inline-block"}function clear(){for(num=0;num<81;num++)document.getElementById(card[num]).style.display="none"}function random(){r=Math.floor(81*Math.random())}function rand(){for(nam=0;nam<12;)random(),r!=visi[0]&&r!=visi[1]&&r!=visi[2]&&r!=visi[3]&&r!=visi[4]&&r!=visi[5]&&r!=visi[6]&&r!=visi[7]&&r!=visi[8]&&r!=visi[9]&&r!=visi[10]&&r!=visi[11]&&r!=visi[12]&&r!=visi[13]&&r!=visi[14]?(visi[nam]=r,visc[nam]=card[r],open(card[r]),nam++):random()}function radd(){for(nam=0;nam<3;)random(),r!=visi[0]&&r!=visi[1]&&r!=visi[2]&&r!=visi[3]&&r!=visi[4]&&r!=visi[5]&&r!=visi[6]&&r!=visi[7]&&r!=visi[8]&&r!=visi[9]&&r!=visi[10]&&r!=visi[11]&&r!=visi[12]&&r!=visi[13]&&r!=visi[14]?(visi.push(r),visc.push(card[r]),open(card[r]),nam++):random()}function score(n){x++,document.getElementById(n).style.transform="scale(0.9,0.9)",document.getElementById(n).style.backgroundColor="#fafafa",on.push(n),3===x&&(3!==a&&3!==b&&3!==c&&a!==b||3!==n1&&3!==n2&&3!==n3&&n1!==n2||3!==d&&3!==e&&3!==f&&d!==e||3!==g&&3!==h&&3!==i&&g!==h?z--:(z++,hide(on[0]),hide(on[1]),hide(on[2]),0===nom?radd():nom=0),document.getElementById("z").innerHTML=1===z||-1===z?z+" point":z+" points",color(),zero())}function zero(){for(num=c3fi=c3fh=c3fg=c3ei=c3eh=c3eg=c3di=c3dh=c3dg=c2fi=c2fh=c2fg=c2ei=c2eh=c2eg=c2di=c2dh=c2dg=c1fi=c1fh=c1fg=c1ei=c1eh=c1eg=c1di=c1dh=c1dg=b3fi=b3fh=b3fg=b3ei=b3eh=b3eg=b3di=b3dh=b3dg=b2fi=b2fh=b2fg=b2ei=b2eh=b2eg=b2di=b2dh=b2dg=b1fi=b1fh=b1fg=b1ei=b1eh=b1eg=b1di=b1dh=b1dg=a3fi=a3fh=a3fg=a3ei=a3eh=a3eg=a3di=a3dh=a3dg=a2fi=a2fh=a2fg=a2ei=a2eh=a2eg=a2di=a2dh=a2dg=a1fi=a1fh=a1fg=a1ei=a1eh=a1eg=a1di=a1dh=a1dg=x=i=h=g=f=e=d=n3=n2=n1=c=b=a=0;num<81;num++)document.getElementById(card[num]).style.transform="scale(1,1)",document.getElementById(card[num]).style.backgroundColor="#fff";num=0,on=[]}function color(){document.getElementById("z").style.color=z<0?"#c44":0<z?"#4b4":"#44d"}function undo(e){x--,document.getElementById(e).style.transform="scale(1,1)",document.getElementById(e).style.backgroundColor="#fff",on.remove(e)}Array.prototype.remove=function(){for(var e,n,c=arguments,d=c.length;d&&this.length;)for(e=c[--d];-1!==(n=this.indexOf(e));)this.splice(n,1);return this},color(),clear(),rand(),document.getElementById("reset").onclick=function(){z=0,zero(),color(),document.getElementById("z").innerHTML=z+" points",clear(),rand()},document.getElementById("add").onclick=function(){nom<1&&(radd(),nom=1)},document.getElementById("faq").onclick=function(){document.getElementById("about").style="display:fixed"},document.getElementById("okay").onclick=function(){document.getElementById("about").style="display:none"},document.getElementById("a1dg").onclick=function(){0===a1dg?(a++,n1++,d++,g++,a1dg++,score("a1dg")):(a--,n1--,d--,g--,a1dg--,undo("a1dg"))},document.getElementById("a1dh").onclick=function(){0===a1dh?(a++,n1++,d++,h++,a1dh++,score("a1dh")):(a--,n1--,d--,h--,a1dh--,undo("a1dh"))},document.getElementById("a1di").onclick=function(){0===a1di?(a++,n1++,d++,i++,a1di++,score("a1di")):(a--,n1--,d--,i--,a1di--,undo("a1di"))},document.getElementById("a1eg").onclick=function(){0===a1eg?(a++,n1++,e++,g++,a1eg++,score("a1eg")):(a--,n1--,e--,g--,a1eg--,undo("a1eg"))},document.getElementById("a1eh").onclick=function(){0===a1eh?(a++,n1++,e++,h++,a1eh++,score("a1eh")):(a--,n1--,e--,h--,a1eh--,undo("a1eh"))},document.getElementById("a1ei").onclick=function(){0===a1ei?(a++,n1++,e++,i++,a1ei++,score("a1ei")):(a--,n1--,e--,i--,a1ei--,undo("a1ei"))},document.getElementById("a1fg").onclick=function(){0===a1fg?(a++,n1++,f++,g++,a1fg++,score("a1fg")):(a--,n1--,f--,g--,a1fg--,undo("a1fg"))},document.getElementById("a1fh").onclick=function(){0===a1fh?(a++,n1++,f++,h++,a1fh++,score("a1fh")):(a--,n1--,f--,h--,a1fh--,undo("a1fh"))},document.getElementById("a1fi").onclick=function(){0===a1fi?(a++,n1++,f++,i++,a1fi++,score("a1fi")):(a--,n1--,f--,i--,a1fi--,undo("a1fi"))},document.getElementById("a2dg").onclick=function(){0===a2dg?(a++,n2++,d++,g++,a2dg++,score("a2dg")):(a--,n2--,d--,g--,a2dg--,undo("a2dg"))},document.getElementById("a2dh").onclick=function(){0===a2dh?(a++,n2++,d++,h++,a2dh++,score("a2dh")):(a--,n2--,d--,h--,a2dh--,undo("a2dh"))},document.getElementById("a2di").onclick=function(){0===a2di?(a++,n2++,d++,i++,a2di++,score("a2di")):(a--,n2--,d--,i--,a2di--,undo("a2di"))},document.getElementById("a2eg").onclick=function(){0===a2eg?(a++,n2++,e++,g++,a2eg++,score("a2eg")):(a--,n2--,e--,g--,a2eg--,undo("a2eg"))},document.getElementById("a2eh").onclick=function(){0===a2eh?(a++,n2++,e++,h++,a2eh++,score("a2eh")):(a--,n2--,e--,h--,a2eh--,undo("a2eh"))},document.getElementById("a2ei").onclick=function(){0===a2ei?(a++,n2++,e++,i++,a2ei++,score("a2ei")):(a--,n2--,e--,i--,a2ei--,undo("a2ei"))},document.getElementById("a2fg").onclick=function(){0===a2fg?(a++,n2++,f++,g++,a2fg++,score("a2fg")):(a--,n2--,f--,g--,a2fg--,undo("a2fg"))},document.getElementById("a2fh").onclick=function(){0===a2fh?(a++,n2++,f++,h++,a2fh++,score("a2fh")):(a--,n2--,f--,h--,a2fh--,undo("a2fh"))},document.getElementById("a2fi").onclick=function(){0===a2fi?(a++,n2++,f++,i++,a2fi++,score("a2fi")):(a--,n2--,f--,i--,a2fi--,undo("a2fi"))},document.getElementById("a3dg").onclick=function(){0===a3dg?(a++,n3++,d++,g++,a3dg++,score("a3dg")):(a--,n3--,d--,g--,a3dg--,undo("a3dg"))},document.getElementById("a3dh").onclick=function(){0===a3dh?(a++,n3++,d++,h++,a3dh++,score("a3dh")):(a--,n3--,d--,h--,a3dh--,undo("a3dh"))},document.getElementById("a3di").onclick=function(){0===a3di?(a++,n3++,d++,i++,a3di++,score("a3di")):(a--,n3--,d--,i--,a3di--,undo("a3di"))},document.getElementById("a3eg").onclick=function(){0===a3eg?(a++,n3++,e++,g++,a3eg++,score("a3eg")):(a--,n3--,e--,g--,a3eg--,undo("a3eg"))},document.getElementById("a3eh").onclick=function(){0===a3eh?(a++,n3++,e++,h++,a3eh++,score("a3eh")):(a--,n3--,e--,h--,a3eh--,undo("a3eh"))},document.getElementById("a3ei").onclick=function(){0===a3ei?(a++,n3++,e++,i++,a3ei++,score("a3ei")):(a--,n3--,e--,i--,a3ei--,undo("a3ei"))},document.getElementById("a3fg").onclick=function(){0===a3fg?(a++,n3++,f++,g++,a3fg++,score("a3fg")):(a--,n3--,f--,g--,a3fg--,undo("a3fg"))},document.getElementById("a3fh").onclick=function(){0===a3fh?(a++,n3++,f++,h++,a3fh++,score("a3fh")):(a--,n3--,f--,h--,a3fh--,undo("a3fh"))},document.getElementById("a3fi").onclick=function(){0===a3fi?(a++,n3++,f++,i++,a3fi++,score("a3fi")):(a--,n3--,f--,i--,a3fi--,undo("a3fi"))},document.getElementById("b1dg").onclick=function(){0===b1dg?(b++,n1++,d++,g++,b1dg++,score("b1dg")):(b--,n1--,d--,g--,b1dg--,undo("b1dg"))},document.getElementById("b1dh").onclick=function(){0===b1dh?(b++,n1++,d++,h++,b1dh++,score("b1dh")):(b--,n1--,d--,h--,b1dh--,undo("b1dh"))},document.getElementById("b1di").onclick=function(){0===b1di?(b++,n1++,d++,i++,b1di++,score("b1di")):(b--,n1--,d--,i--,b1di--,undo("b1di"))},document.getElementById("b1eg").onclick=function(){0===b1eg?(b++,n1++,e++,g++,b1eg++,score("b1eg")):(b--,n1--,e--,g--,b1eg--,undo("b1eg"))},document.getElementById("b1eh").onclick=function(){0===b1eh?(b++,n1++,e++,h++,b1eh++,score("b1eh")):(b--,n1--,e--,h--,b1eh--,undo("b1eh"))},document.getElementById("b1ei").onclick=function(){0===b1ei?(b++,n1++,e++,i++,b1ei++,score("b1ei")):(b--,n1--,e--,i--,b1ei--,undo("b1ei"))},document.getElementById("b1fg").onclick=function(){0===b1fg?(b++,n1++,f++,g++,b1fg++,score("b1fg")):(b--,n1--,f--,g--,b1fg--,undo("b1fg"))},document.getElementById("b1fh").onclick=function(){0===b1fh?(b++,n1++,f++,h++,b1fh++,score("b1fh")):(b--,n1--,f--,h--,b1fh--,undo("b1fh"))},document.getElementById("b1fi").onclick=function(){0===b1fi?(b++,n1++,f++,i++,b1fi++,score("b1fi")):(b--,n1--,f--,i--,b1fi--,undo("b1fi"))},document.getElementById("b2dg").onclick=function(){0===b2dg?(b++,n2++,d++,g++,b2dg++,score("b2dg")):(b--,n2--,d--,g--,b2dg--,undo("b2dg"))},document.getElementById("b2dh").onclick=function(){0===b2dh?(b++,n2++,d++,h++,b2dh++,score("b2dh")):(b--,n2--,d--,h--,b2dh--,undo("b2dh"))},document.getElementById("b2di").onclick=function(){0===b2di?(b++,n2++,d++,i++,b2di++,score("b2di")):(b--,n2--,d--,i--,b2di--,undo("b2di"))},document.getElementById("b2eg").onclick=function(){0===b2eg?(b++,n2++,e++,g++,b2eg++,score("b2eg")):(b--,n2--,e--,g--,b2eg--,undo("b2eg"))},document.getElementById("b2eh").onclick=function(){0===b2eh?(b++,n2++,e++,h++,b2eh++,score("b2eh")):(b--,n2--,e--,h--,b2eh--,undo("b2eh"))},document.getElementById("b2ei").onclick=function(){0===b2ei?(b++,n2++,e++,i++,b2ei++,score("b2ei")):(b--,n2--,e--,i--,b2ei--,undo("b2ei"))},document.getElementById("b2fg").onclick=function(){0===b2fg?(b++,n2++,f++,g++,b2fg++,score("b2fg")):(b--,n2--,f--,g--,b2fg--,undo("b2fg"))},document.getElementById("b2fh").onclick=function(){0===b2fh?(b++,n2++,f++,h++,b2fh++,score("b2fh")):(b--,n2--,f--,h--,b2fh--,undo("b2fh"))},document.getElementById("b2fi").onclick=function(){0===b2fi?(b++,n2++,f++,i++,b2fi++,score("b2fi")):(b--,n2--,f--,i--,b2fi--,undo("b2fi"))},document.getElementById("b3dg").onclick=function(){0===b3dg?(b++,n3++,d++,g++,b3dg++,score("b3dg")):(b--,n3--,d--,g--,b3dg--,undo("b3dg"))},document.getElementById("b3dh").onclick=function(){0===b3dh?(b++,n3++,d++,h++,b3dh++,score("b3dh")):(b--,n3--,d--,h--,b3dh--,undo("b3dh"))},document.getElementById("b3di").onclick=function(){0===b3di?(b++,n3++,d++,i++,b3di++,score("b3di")):(b--,n3--,d--,i--,b3di--,undo("b3di"))},document.getElementById("b3eg").onclick=function(){0===b3eg?(b++,n3++,e++,g++,b3eg++,score("b3eg")):(b--,n3--,e--,g--,b3eg--,undo("b3eg"))},document.getElementById("b3eh").onclick=function(){0===b3eh?(b++,n3++,e++,h++,b3eh++,score("b3eh")):(b--,n3--,e--,h--,b3eh--,undo("b3eh"))},document.getElementById("b3ei").onclick=function(){0===b3ei?(b++,n3++,e++,i++,b3ei++,score("b3ei")):(b--,n3--,e--,i--,b3ei--,undo("b3ei"))},document.getElementById("b3fg").onclick=function(){0===b3fg?(b++,n3++,f++,g++,b3fg++,score("b3fg")):(b--,n3--,f--,g--,b3fg--,undo("b3fg"))},document.getElementById("b3fh").onclick=function(){0===b3fh?(b++,n3++,f++,h++,b3fh++,score("b3fh")):(b--,n3--,f--,h--,b3fh--,undo("b3fh"))},document.getElementById("b3fi").onclick=function(){0===b3fi?(b++,n3++,f++,i++,b3fi++,score("b3fi")):(b--,n3--,f--,i--,b3fi--,undo("b3fi"))},document.getElementById("c1dg").onclick=function(){0===c1dg?(c++,n1++,d++,g++,c1dg++,score("c1dg")):(c--,n1--,d--,g--,c1dg--,undo("c1dg"))},document.getElementById("c1dh").onclick=function(){0===c1dh?(c++,n1++,d++,h++,c1dh++,score("c1dh")):(c--,n1--,d--,h--,c1dh--,undo("c1dh"))},document.getElementById("c1di").onclick=function(){0===c1di?(c++,n1++,d++,i++,c1di++,score("c1di")):(c--,n1--,d--,i--,c1di--,undo("c1di"))},document.getElementById("c1eg").onclick=function(){0===c1eg?(c++,n1++,e++,g++,c1eg++,score("c1eg")):(c--,n1--,e--,g--,c1eg--,undo("c1eg"))},document.getElementById("c1eh").onclick=function(){0===c1eh?(c++,n1++,e++,h++,c1eh++,score("c1eh")):(c--,n1--,e--,h--,c1eh--,undo("c1eh"))},document.getElementById("c1ei").onclick=function(){0===c1ei?(c++,n1++,e++,i++,c1ei++,score("c1ei")):(c--,n1--,e--,i--,c1ei--,undo("c1ei"))},document.getElementById("c1fg").onclick=function(){0===c1fg?(c++,n1++,f++,g++,c1fg++,score("c1fg")):(c--,n1--,f--,g--,c1fg--,undo("c1fg"))},document.getElementById("c1fh").onclick=function(){0===c1fh?(c++,n1++,f++,h++,c1fh++,score("c1fh")):(c--,n1--,f--,h--,c1fh--,undo("c1fh"))},document.getElementById("c1fi").onclick=function(){0===c1fi?(c++,n1++,f++,i++,c1fi++,score("c1fi")):(c--,n1--,f--,i--,c1fi--,undo("c1fi"))},document.getElementById("c2dg").onclick=function(){0===c2dg?(c++,n2++,d++,g++,c2dg++,score("c2dg")):(c--,n2--,d--,g--,c2dg--,undo("c2dg"))},document.getElementById("c2dh").onclick=function(){0===c2dh?(c++,n2++,d++,h++,c2dh++,score("c2dh")):(c--,n2--,d--,h--,c2dh--,undo("c2dh"))},document.getElementById("c2di").onclick=function(){0===c2di?(c++,n2++,d++,i++,c2di++,score("c2di")):(c--,n2--,d--,i--,c2di--,undo("c2di"))},document.getElementById("c2eg").onclick=function(){0===c2eg?(c++,n2++,e++,g++,c2eg++,score("c2eg")):(c--,n2--,e--,g--,c2eg--,undo("c2eg"))},document.getElementById("c2eh").onclick=function(){0===c2eh?(c++,n2++,e++,h++,c2eh++,score("c2eh")):(c--,n2--,e--,h--,c2eh--,undo("c2eh"))},document.getElementById("c2ei").onclick=function(){0===c2ei?(c++,n2++,e++,i++,c2ei++,score("c2ei")):(c--,n2--,e--,i--,c2ei--,undo("c2ei"))},document.getElementById("c2fg").onclick=function(){0===c2fg?(c++,n2++,f++,g++,c2fg++,score("c2fg")):(c--,n2--,f--,g--,c2fg--,undo("c2fg"))},document.getElementById("c2fh").onclick=function(){0===c2fh?(c++,n2++,f++,h++,c2fh++,score("c2fh")):(c--,n2--,f--,h--,c2fh--,undo("c2fh"))},document.getElementById("c2fi").onclick=function(){0===c2fi?(c++,n2++,f++,i++,c2fi++,score("c2fi")):(c--,n2--,f--,i--,c2fi--,undo("c2fi"))},document.getElementById("c3dg").onclick=function(){0===c3dg?(c++,n3++,d++,g++,c3dg++,score("c3dg")):(c--,n3--,d--,g--,c3dg--,undo("c3dg"))},document.getElementById("c3dh").onclick=function(){0===c3dh?(c++,n3++,d++,h++,c3dh++,score("c3dh")):(c--,n3--,d--,h--,c3dh--,undo("c3dh"))},document.getElementById("c3di").onclick=function(){0===c3di?(c++,n3++,d++,i++,c3di++,score("c3di")):(c--,n3--,d--,i--,c3di--,undo("c3di"))},document.getElementById("c3eg").onclick=function(){0===c3eg?(c++,n3++,e++,g++,c3eg++,score("c3eg")):(c--,n3--,e--,g--,c3eg--,undo("c3eg"))},document.getElementById("c3eh").onclick=function(){0===c3eh?(c++,n3++,e++,h++,c3eh++,score("c3eh")):(c--,n3--,e--,h--,c3eh--,undo("c3eh"))},document.getElementById("c3ei").onclick=function(){0===c3ei?(c++,n3++,e++,i++,c3ei++,score("c3ei")):(c--,n3--,e--,i--,c3ei--,undo("c3ei"))},document.getElementById("c3fg").onclick=function(){0===c3fg?(c++,n3++,f++,g++,c3fg++,score("c3fg")):(c--,n3--,f--,g--,c3fg--,undo("c3fg"))},document.getElementById("c3fh").onclick=function(){0===c3fh?(c++,n3++,f++,h++,c3fh++,score("c3fh")):(c--,n3--,f--,h--,c3fh--,undo("c3fh"))},document.getElementById("c3fi").onclick=function(){0===c3fi?(c++,n3++,f++,i++,c3fi++,score("c3fi")):(c--,n3--,f--,i--,c3fi--,undo("c3fi"))};