JavaScript library of MyScripts iOS app
=======================================

**iOS 用ソフトウェア MyScripts は、既に最新の iOS（少なくとも iOS 12 以上）ではサポートされていません。**
同様のことを行いたい場合、Apple が標準アプリとして提供しているショートカットアプリなどを使用することができるでしょう。
このリポジトリは、MyScripts が使われていた当時の記録として残しています。

**MyScripts iOS software is not supported on newest iOS version already.**
If you want to do MyScripts' like recipe, then you can use Apple Shortcut.app, and so on.
This repository is left for record past MyScript days.

---

(Simply English description is followed Japanese)

このライブラリはiOSアプリ["MyScripts"](http://unitkay.com/myscripts/)で使うことができるJavaScriptを集めたライブラリです。

MyScriptsはDropboxとの連携機能があるので、もしDropboxアカウントをお持ちでしたら、このリポジトリをDropbox以下にチェックインして利用すると便利でしょう。 → **Dropboxはシンボリックリンクを実体化してしまうらしいので、別の場所でcloneしたGitディレクトリのシンボリックリンクを作ると意図しないディスクの無駄になる可能性もあります。**
    
    $ cd ~/git/
    $ git clone git://github.com/xtetsuji/js-MyScripts-app.git
    $ cd js-MyScripts-app
    $ mkdir -v -p ~/Dropbox/js-MyScripts-app
    $ make deploy DEPLOY_DIR=~/Dropbox/js-MyScripts-app

特にスクリプト内に注釈がない場合、 **スクリプトのライセンスはMITライセンス** といたします。ご自由にお使いください。

何か不具合、ご要望ありましたら、Issueを使ってくださるか、Twitter [@xtetsuji](https://twitter.com/xtetsuji) までご連絡いただければ、出来る限り対処します。

参考:

- [作者による公式ページ](http://unitkay.wordpress.com/myscripts/)
- [MyScripts @ Wiki](http://www51.atwiki.jp/myscripts/)

----

This repositry is JavaScript library for Japanese iOS application ["MyScripts"](http://unitkay.wordpress.com/myscripts/).

I do not know MyScripts'es English description or introduction page. And I do not know that you can purchase "MyScripts" on your country App Store. However I think that "MyScripts" is powerful tool for your iPhone/iPad/iPod Touch. "MyScripts" let your iOS environment comfortable.

If you have report or some idea, then contact Twitter [@xtetsuji](https://twitter.com/xtetsuji). I maybe work on best effort. But my English skill is so poor, then I need a lot of time for replying.

Those JavaScript scripts on this repositrory license are **MIT license** without mentioned specially in it.
