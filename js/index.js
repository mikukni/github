function closes()
{
	var di=document.getElementById("botclos");
	di.style.display="none";
}

function dix(pd)
{
	if(pd==1){
	var s=document.getElementById("top_ld");
	s.style.display="block";
	}else
	{
		var s=document.getElementById("top_ld1");
		s.style.display="block";
	}
}
function dixs(pd)
{
	if(pd==1){
	var s=document.getElementById("top_ld");
	s.style.display="none";
	}else
	{
		var s=document.getElementById("top_ld1");
		s.style.display="none";
		var di=document.getElementById("top_ld2")
		di.style.display="none";
	}
}
function di_jp(pd)
{
	var di=document.getElementById("top_ld2")
	di.style.display="block";
	var tp=document.getElementById("tp_id")
	if(pd==1)
	{
		tp.style.backgroundImage="url(img/weixin.jpg)";
	}
	if(pd==2)
	{
		tp.style.backgroundImage="url(img/weibo.png)";
	}
}
//上
//上LI
function showli(pd)
{
	
	var i=document.getElementById("topul").getElementsByTagName("li");
	for(var a=0;a<i.length;a++)
	{
		i[a].style.border="none";
	}
	i[pd-1].style.borderBottom="2px double #FE6546";
}

//下
function bot(ns)
{
	
	if(ns==1)
	{
		var s=document.getElementById("bot_img");
		s.style.display="block";
	}else
	{
		document.getElementById("bot_img1").style.display="block";
	}
}
function botyc()
{
		document.getElementById("bot_img").style.display="none";
		document.getElementById("bot_img1").style.display="none";
}
