// -*- javascript -*-
// title: Wikipedia→Wikipanion
// action: Open_In
// description: Wikipanionが必要です

if(TEXT.match(/wikipedia\.org/)){
    "wiki" + (TEXT.substring(4,TEXT.length).replace(/\.m\./,"."));
} else {
    void(0);
}
