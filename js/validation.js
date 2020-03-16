function removeVal(){
  $("#nama").val('');
  $("#parent").val('');
  $("#grade").val('');
  $("#tlp").val('');
  $("#address").val('');
  $("#message").val('');
}

function submitContact(){
  $("#contact_form").submit(function(a) {
    a.preventDefault();
    var b = !1,
        c = $("#nama").val(),
        d = $("#parent").val(),
        e = $("#grade").val(),
        f = $("#tlp").val(),
        g = $("#address").val(),
        h = $("#message").val();
  
    if($("#nama,#parent,#grade,#tlp,#address,#message").click(function() {
        $(this).removeClass("error_input")
      }), 0 == c.length) {
          var b = !0;
          $("#nama").addClass("error_input")
      } else $("#nama").removeClass("error_input");
    
    if (0 == d.length) {
        var b = !0;
        $("#parent").addClass("error_input")
    } else $("#parent").removeClass("error_input");
    
    if (0 == e.length || e.length > 2) {
        var b = !0;
        $("#grade").addClass("error_input")
    } else $("#grade").removeClass("error_input");
    
    if (0 == f.length) {
        var b = !0;
        $("#tlp").addClass("error_input")
    } else $("#tlp").removeClass("error_input");
    
    if (0 == g.length){
      var b = !0;
      $("#address").addClass("error_input")
    } else $("#address").removeClass("error_input");

    if (0 == h.length){
      var b = !0;
      $("#message").addClass("error_input")
    } else $("#message").removeClass("error_input");

    0 == b && ($("#send_message").attr({
        disabled: "true",
        value: "Sending..."
    }), $.post("service_kontak.php", $("#contact_form").serialize(), function(a) {
        "sent" == a ? ($("#submit").remove(), $("#mail_success").fadeIn(500), removeVal()) : ($("#mail_fail").fadeIn(500), $("#send_message").removeAttr("disabled").attr("value", "Send The Message"))
    }))
  })

}

function submitRegis(){
  $("#regis_form").submit(function(a) {
    a.preventDefault();
    var b = !1,
        c = $("#regis_name").val(),
        d = $("#regis_ttl").val(),
        e = $("#regis_agama").val(),
        f = $("#regis_alamat").val(),
        g = $("#regis_kelas").val(),
        h = $("#regis_asal_sekolah").val();
        i = $("#regis_phone").val();
        j = $("#regis_prestasi").val();
        k = $("#regis_program").val();
        l = $("#regis_hari").val();
        m = $("#regis_jam").val();
        n = $("#regis_sumber").val();
        o = $("#regis_email").val();
        p = $("#regis_ortu").val();


    if($("#regis_name,#regis_ttl,#regis_agama,#regis_alamat,#regis_kelas,#regis_asal_sekolah,#regis_phone,#regis_email,#regis_prestasi,#regis_ortu,#regis_program,#regis_hari,#regis_jam,#regis_sumber").click(function() {
        $(this).removeClass("error_input")
      }), 0 == c.length) {
          var b = !0;
          $("#regis_name").addClass("error_input")
      } else $("#regis_name").removeClass("error_input");
    
    if (0 == d.length) {
        var b = !0;
        $("#regis_ttl").addClass("error_input")
    } else $("#regis_ttl").removeClass("error_input");
    
    if (0 == e.length) {
        var b = !0;
        $("#regis_agama").addClass("error_input")
    } else $("#regis_agama").removeClass("error_input");

    if (0 == f.length) {
      var b = !0;
      $("#regis_alamat").addClass("error_input")
    } else $("#regis_alamat").removeClass("error_input");
    
    if (0 == g.length || g.length > 2) {
        var b = !0;
        $("#regis_kelas").addClass("error_input")
    } else $("#regis_kelas").removeClass("error_input");
    
    if (0 == h.length){
      var b = !0;
      $("#regis_asal_sekolah").addClass("error_input")
    } else $("#regis_asal_sekolah").removeClass("error_input");

    if (0 == i.length || g.length > 13){
      var b = !0;
      $("#regis_phone").addClass("error_input")
    } else $("#regis_phone").removeClass("error_input");

    if (0 == j.length){
      var b = !0;
      $("#regis_prestasi").addClass("error_input")
    } else $("#regis_prestasi").removeClass("error_input");

    if (0 == k.length){
      var b = !0;
      $("#regis_program").addClass("error_input")
    } else $("#regis_program").removeClass("error_input");

    if (0 == l.length){
      var b = !0;
      $("#regis_hari").addClass("error_input")
    } else $("#regis_hari").removeClass("error_input");

    if (0 == m.length){
      var b = !0;
      $("#regis_jam").addClass("error_input")
    } else $("#regis_jam").removeClass("error_input");
    
    if (0 == n.length){
      var b = !0;
      $("#regis_sumber").addClass("error_input")
	  } else $("#regis_sumber").removeClass("error_input");
	
    if (0 == o.length){
      var b = !0;
      $("#regis_email").addClass("error_input")
	  } else $("#regis_email").removeClass("error_input");
  
    if (0 == p.length){
      var b = !0;
      $("#regis_ortu").addClass("error_input")
	  } else $("#regis_ortu").removeClass("error_input");
  
	
    0 == b && ($("#send_registration").attr({
        disabled: "true",
        value: "Sending..."
    }), $.post("service_registration.php", $("#regis_form").serialize(), function(a) {
        "sent" == a ? ($("#send_registration").remove(), $("#regis_success").fadeIn(500)) : ($("#regis_fail").fadeIn(500), $("#send_registration").removeAttr("disabled").attr("value", "Register Now"))
    }))
  })
}

function submitLogin(){
  $("#login_form").submit(function(a) {
    a.preventDefault();
    var b = !1,
        c = $("#login_name").val(),
        d = $("#login_pass").val();


    if($("#login_name,#login_pass").click(function() {
        $(this).removeClass("error_input")
      }), 0 == c.length) {
          var b = !0;
          $("#login_name").addClass("error_input")
      } else $("#login_name").removeClass("error_input");
    
    if (0 == d.length) {
        var b = !0;
        $("#login_pass").addClass("error_input")
    } else $("#login_pass").removeClass("error_input");
    
    0 == b && ($("#submit_login").attr({
        disabled: "true",
        value: "Sending..."
    }), $.post("service_login.php", $("#login_form").serialize(), function(a) {
	   
     var obj = JSON.parse(a);
     console.log(obj[0])
        
      if("sent" == obj[0]){
        $("#submit_login").remove()
        $("#login_success").fadeIn(500)
        if(obj[1] == 1 || obj[1]==2){
          window.location.href = 'http://localhost/KKP/dashboard/index.php';
        } else {
          window.location.href = 'http://localhost/KKP/dashboard/index-user.php';
        }
      } else if("pass" == a){
        $("#login_fail_pass").fadeIn(500)
        $("#submit_login").removeAttr("disabled").attr("value", "Login")
        $("#login_fail_pass").fadeOut(2500)
      } else {
        $("#login_fail_user").fadeIn(500)
        $("#submit_login").removeAttr("disabled").attr("value", "Login")
        $("#login_fail_user").fadeOut(2500)
      }
    }))
  })
}

$(document).ready(function() {
  submitContact();
  submitRegis();
  submitLogin();
});