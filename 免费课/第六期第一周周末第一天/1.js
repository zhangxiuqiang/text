/**
 * Created by xiao lei on 2016/6/4.
 */
window.onload=function(){
    //ʵ��˼·���������div1,Ȼdiv2��ʾ���Ƴ�������
    //���������div1Ԫ�ص�ʱ�����ʲô�£�
    var oDiv1=document.getElementById('div1');
    console.log(oDiv1)
    var oDiv2=document.getElementById('div2');
    oDiv1["onmouseover"]=function(){
        //����ŵĶ���������������ɵ����飻
        oDiv2.style.display='block';
    };
    oDiv1["onmouseout"]=function(){
        oDiv2["style"]["display"]='none';
    };
}