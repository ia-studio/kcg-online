/**
 * Created by matty on 2016/11/15.
 */
/*
 * generate key string as case token
 *
 * */
export let genCaseToken = (length: number): string => {
  let text: string = ''; //final result
  let possibilities = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
  for(let i = 0; i < length; i++ ){
    text += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
  }
  return text;
}
