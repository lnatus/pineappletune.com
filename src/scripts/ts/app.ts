const { $ } = window

namespace PA {
  export class AppService {
    private emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    public run () {
      const $email = $('#email')
      const $send = $('#btnSubscribe')

      $email.keyup(() =>{
        if($email.val() && this.emailRegex.test($email.val())){
          $send.removeAttr('disabled')
        } else {
          $send.attr('disabled', 'disabled')
        }
      })
    }
  }
}