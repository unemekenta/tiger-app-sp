//アドレスの日本語入力チェック
const jpCheck = (Email:string) => {
  const regexEmail = /[亜-熙ぁ-んァ-ヶ]/;
  return regexEmail.test(Email);
};

//アドレス,パスワードの空文字チェック
const blankCheck = (props:string) => {
  const regexEmail = /[^\s　]/;
  return !regexEmail.test(props);
};

//アドレスの形式チェック('英数字' + @ + '英数字' + . + '英数字'の形式のみ可)
const checkEmailFormat = (Email:string) => {
  const regexEmail = /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  return !regexEmail.test(Email);
};

//数値の空文字チェック
const blankNumCheck = (props:string) => {
  const regexNum = /[0-9]{1,}/;
  return !regexNum.test(props);
};

//文字数チェック
const textLengthCheck = (props:string, maxNum:number) => {
  if (props) {
    const textLength = props.length;
    return !(textLength <= maxNum);
  }
};

export {jpCheck,blankCheck,checkEmailFormat,blankNumCheck, textLengthCheck};