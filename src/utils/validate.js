
  export const validateRequired = (value, ref, mess) => {
    if (value) {
      ref.innerHTML = "";
      return true;
    }
    ref.innerHTML = mess;
    return false;
  };
  export const validateEmail = (value, ref, mess) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      //neu thoa man pattern
      ref.innerHTML = "";
      return true;
    }
    //sai pattern
    ref.innerHTML = mess;
    return false;
  };
  export const validateNumber = (value, ref, mess) => {
    if (/^[0-9]+$/.test(value)) {
      ref.innerHTML = "";
      return true;
    }
    ref.innerHTML = mess;
    return false;
  };
  export const validateLetter = (value, ref, mess) => {
    if (
      /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/.test(
        value
      )
    ) {
      ref.innerHTML = "";
      return true;
    }
    ref.innerHTML = mess;
    return false;
  };
  export const validatePassword = (value, ref, mess) => {
    if (
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/.test(
        value
      )
    ) {
      ref.innerHTML = "";
      return true;
    }
    ref.innerHTML = mess;
    return false;
  };

