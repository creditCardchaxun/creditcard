$(function () {
    // 定义开关变量
    let flagName   = false
    let flagPhone  = false
    let flagId     = false

    var name     = $(".name")
    var phone    = $(".tel")
    var identity = $(".id_number")


    var myDate = new Date;
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate(); //获取当前日
    name.blur(function () {
        fnCheckName()
    })

    function fnCheckName() {
        let value = name.val()

        let text  = /^[\u4E00-\u9FA5]{1,6}$/

        if (value == '') {
            name.parent().next().show().html('姓名不能为空')
            flagName = false
            return
        }
        if (text.test(value)) {
            name.parent().next().hide()
            flagName = true
        } else {
            name.parent().next().show().html('姓名不合法。')
            flagName = false
        }
    }

    phone.blur(function(){
        fnCheckPhone()
    })

    function fnCheckPhone(){
        let value = phone.val()

        // let text  = /^1[3456789]\d{9}$/;
        let text=/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/; 
        if (value == ''){
            phone.parent().next().show().html('手机号不能为空')
            flagPhone = false
            return
        }
        if(text.test(value))
        {
            phone.parent().next().hide()
            flagPhone = true
        }
        else
        {
            phone.parent().next().show().html('手机号码不正确.')
            flagPhone = false
        }
    }

    identity.blur(function(){
        fnCheckIdentity()
    })

    function fnCheckIdentity(){
        let value = identity.val()

        let text  = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

        if (value == ''){
            identity.parent().next().show().html('身份证号为空')
            flagId = false
            return
        }
        if(text.test(value))
        {
            identity.parent().next().hide()
            flagId = true
        }
        else
        {
            identity.parent().next().show().html('身份证号不正确.')
            flagId = false
        }
    }
    $(document).on('click','.submit',function(){
        if(flagName && flagPhone && flagId){
            $(".form-text").addClass('hidden');
            $(".form-result").removeClass('hidden');

            $(".name-text").text(name.val());
            $(".phone-text").text(phone.val());
            $(".id-text").text(identity.val());
            $(".time-text").text(year + "年" + mon + "月" + date + "日");
            $(".speed-text").text($("#speed option:selected").text());
        } else {
            alert("输入内容有误，请重新输入");
            return false
        }
    })

    $(document).on('click','.resulet',function(){
        $(".form-result").addClass('hidden');
        $(".form-text").removeClass('hidden');
        $(':input','#form')
            .not(':button,:submit,:reset,:hidden')
            .val('')
            .removeAttr('checked')
            .removeAttr('selected');

        flagName   = false
        flagPhone  = false
        flagId     = false
    })
})
