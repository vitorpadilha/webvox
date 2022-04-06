export interface  KeyboardKeyInterface {
    key: number,
    upperKey: number,
    speak: string
}
export let upperKeysLetters: KeyboardKeyInterface[] = [];
for(var i=97;i<=122;i++) {
    upperKeysLetters.push(
        {
            key: i,
            upperKey: i-32,
            speak: ""
        }
    );
}
upperKeysLetters.push({key:32, upperKey:0, speak: "Space"});
   