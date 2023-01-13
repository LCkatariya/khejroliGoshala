import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <div class="container pt-70">
        <div class="section-title text-center">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <h3 class="text-uppercase mt-0">Contact</h3>
              <div class="title-icon">
                <i class="flaticon-charity-hand-holding-a-heart"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                autem
                <br /> voluptatem obcaecati!
              </p>
            </div>
          </div>
        </div>
        <div class="section-content">
          <div class="row pt-30">
            <div class="col-md-8">
              <h3 class="mt-0 mb-30">Interested in discussing?</h3>
              <form
                id="contact_form"
                name="contact_form"
                class="form-transparent"
                action="https://kodesolution.com/html/2015/charityfund-html/demo/includes/sendmail.php"
                method="post"
              >
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="form_name">
                        Name <small>*</small>
                      </label>
                      <input
                        id="form_name"
                        name="form_name"
                        class="form-control"
                        type="text"
                        placeholder="Enter Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="form_email">
                        Email <small>*</small>
                      </label>
                      <input
                        id="form_email"
                        name="form_email"
                        class="form-control required email"
                        type="email"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="form_name">
                        Subject <small>*</small>
                      </label>
                      <input
                        id="form_subject"
                        name="form_subject"
                        class="form-control required"
                        type="text"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="form_phone">Phone</label>
                      <input
                        id="form_phone"
                        name="form_phone"
                        class="form-control"
                        type="text"
                        placeholder="Enter Phone"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="form_name">Message</label>
                  <textarea
                    id="form_message"
                    name="form_message"
                    class="form-control required"
                    rows="5"
                    placeholder="Enter Message"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    id="form_botcheck"
                    name="form_botcheck"
                    class="form-control"
                    type="hidden"
                    value=""
                  />
                  <button
                    type="submit"
                    class="btn btn-dark btn-theme-colored btn-flat mr-5"
                    data-loading-text="Please wait..."
                  >
                    Send your message
                  </button>
                  <button
                    type="reset"
                    class="btn btn-default btn-flat btn-theme-colored"
                  >
                    Reset
                  </button>
                </div>
              </form>

              {/* <script type="text/javascript">
              $("#contact_form").validate({
                submitHandler: function(form) {
                  var form_btn = $(form).find('button[type="submit"]');
                  var form_result_div = '#form-result';
                  $(form_result_div).remove();
                  form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
                  var form_btn_old_msg = form_btn.html();
                  form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
                  $(form).ajaxSubmit({
                    dataType:  'json',
                    success: function(data) {
                      if( data.status == 'true' ) {
                        $(form).find('.form-control').val('');
                      }
                      form_btn.prop('disabled', false).html(form_btn_old_msg);
                      $(form_result_div).html(data.message).fadeIn('slow');
                      setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
                    }
                  });
                }
              });
            </script> */}
            </div>
            <div class="col-md-4">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                  <div class="icon-box left media bg-black-333 p-30 mb-20">
                    {" "}
                    <a class="media-left pull-left" href="#">
                      {" "}
                      <i class="pe-7s-map-2 text-theme-colored"></i>
                    </a>
                    <div class="media-body">
                      {" "}
                      <strong class="text-white">OUR OFFICE LOCATION</strong>
                      <p>#405, Lan Streen, Los Vegas, USA</p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-12 text-white">
                  <div class="icon-box left media bg-black-333 p-30 mb-20">
                    {" "}
                    <a class="media-left pull-left" href="#">
                      {" "}
                      <i class="pe-7s-call text-theme-colored"></i>
                    </a>
                    <div class="media-body">
                      {" "}
                      <strong class="text-white">OUR CONTACT NUMBER</strong>
                      <p>+325 12345 65478</p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-12 text-white">
                  <div class="icon-box left media bg-black-333 p-30 mb-20">
                    {" "}
                    <a class="media-left pull-left" href="#">
                      {" "}
                      <i class="pe-7s-mail text-theme-colored"></i>
                    </a>
                    <div class="media-body">
                      {" "}
                      <strong class="text-white">OUR CONTACT E-MAIL</strong>
                      <p>supporte@yourdomin.com</p>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-12 text-white">
                  <div class="icon-box left media bg-black-333 p-30 mb-20">
                    {" "}
                    <a class="media-left pull-left" href="#">
                      {" "}
                      <i class="fa fa-skype text-theme-colored"></i>
                    </a>
                    <div class="media-body">
                      {" "}
                      <strong class="text-white">Make a Video Call</strong>
                      <p>ThemeMascotSkype</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
