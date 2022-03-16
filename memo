bootswatch - UIcomponent
https://react-bootstrap.netlify.app/components/navbar/#navbars

# ＃７

### Router 問題１

最近になって、Router の使い方が変わったようで、そのままビデオの通り書いても動かない、エラーになる。

```
<Route path="/" component={LandingPage} exact />
```

この書き方を、

```
<Routes>
    <Route path="/" element={<LandingPage/>} exact />
</ Routes>
```

に置き換える必要がある。component が element に変わってたり、Route を Routes で囲む必要があったり。

参考記事
https://flutterq.com/error-a-route-is-only-ever-to-be-used-as-the-child-of-element-never-rendered-directly-please-wrap-your-route-in-a-routes/#:~:text=routes%20by%20Routes%20.-,Error%3A%20A%20Route%20is%20only%20ever%20to%20be%20used%20as,wrap%20your%20routes%20by%20Routes%20.    
  
---
  　
### Router 問題２  
```
<Nav.Link href="/mynotes">
    <Link to="/mynotes">My Notes</Link>
</Nav.Link>
```  
Nav.LinkはBootstrap、かつこの中にアンカータグaが隠れているらしく、ビデオではこれで動いてるけど、エラーが出る。hrefを消しても。
aタグがあるよーっていう内容だと思う。
だから、Nav.Linkではなくて、Navとだけするとエラーは消える。だけど、Nav.Linkに設定されていたcssは当然効かなくなる。
エラーの解決方法：https://thewebdev.info/2021/09/28/how-to-fix-the-warning-validatedomnesting-a-cannot-appear-as-a-descendant-of-a-error-when-developing-react-apps/#:~:text=Developing%20React%20Apps-,To%20fix%20the%20%22Warning%3A%20validateDOMNesting(%E2%80%A6)%3A%20%3Ca,a%20elements%20within%20a%20elements.&text=Browsers%20will%20fix%20the%20HTML,DOM%20different%20from%20what's%20rendered.  

->でも解決した。
```
<Nav.Link as={Link} to="/" >Home</Nav.Link>
```
https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together
https://thewebdev.info/2021/11/15/how-to-add-links-to-a-react-router-route-with-react-bootstrap/

  
---

### Edit & Delete buttonについて

```
<Button href={`/note/${note._id}`}>Edit</Button>
<Button
    variant="danger"
    className="mx-2"
    onClick={() => deleteHandler(note._id)}
>
Delete
</Button>
```
まずEditボタン押すと、まだ遷移先は作ってないけど、パラメータにidがついてページに飛ぶ。ボタン押してみたらわかる。
deleteボタンについて、これまでonclick{fanction}で()付けてしまうと勝手に発動するようになってたが、アノニマスファンクションにすることで、引数を事前渡せるし、クリックした時に発動するようになっている。  
  
## Warning!
  
Bootstrapのアコーディオンが刷新されたため、npmで古いreact-bootstrapに変更。
bootstrapの変更点はURLの通り。
https://engineering.linecorp.com/ja/blog/bootstrap5/#b2  

  

# ＃8

### proxyをfrontendのjsonファイルに追加。

```
"proxy":"http://127.0.0.1:4000",
```

こうすることで、フロントからバックのホスト（今はローカルホスト）にアクセスする時に、このURLとポートでアクセスするという。これによって、

const data=await axios.get("https://note-app-masamern.herokuapp.com/api/notes");
と書いていたものを、
const data=await axios.get("/api/notes");
で済むようになる。CORSエラーも出なくなる、ビデオでは。

と思いきや！！！！！！エラーが出るので、  

やはり、通常どおりjsonのproxy消して、
フロント側ではconst data = await axios.get("https://note-app-masamern.herokuapp.com/api/notes");、
サーバ側ではconst cors = require("cors");とapp.use(cors());置いて、対応。そしたらおっけ。

さらに、コメント欄で「なぜビデオの始めにCORSインポートしてるのに結局つかわないんだ」って言われてる。  
  
### StrintmodeErrorを解消

こんなエラーが出ていた。URLのとおり、bootstrapの新バージョンを使えばエラーが消えるということと、React.StringModeを削除したら消えると。後者を選択した。

```
findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode.
```
https://stackoverflow.com/questions/60903335/warning-finddomnode-is-deprecated-in-strictmode-finddomnode-was-passed-an-inst  


### サーバーとクライアントを同時に立ち上げるすごい技  

まず、concurrently というのをインポート。そして外側のjson（バックエンド側の）に、
```
"scripts": {
"start": "node backend/server",
"server": "nodemon backend/server",
"client": "npm start --prefix frontend",
"dev": "concurrently \"npm run server\" \"npm run client\""
```
こうやっていれる、そしてrun devすると、reactとサーバが一緒に立ち上がる、イェイ。
https://qiita.com/takeo-asai/items/f1099b8bc5046da5e87b
  

# ＃9

db.jsのconnectDBのuseCreateIndex、コンソールでエラー出てくる。もうサポートしてないって。
こちら参考URL。結局、全部入れなくていい的な内容。
https://www.mongodb.com/community/forums/t/option-usecreateindex-is-not-supported/123048/3

# ＃10

POSTMANにenvironmentっていう項目があって、例えばhttps://note-app-masamern.herokuapp.com/を変数として入れて、リクエストのURL項目で変数使って以降は省略できる。{{URL}}/api/users

express-async-handlerって何？
つまりは、短いコードで、trycatchを内々に含みつつ、catchとか書かずに内々でエラーキャッチして次に渡してくれる,next(err)/catch(next)的な。キャッチ出ても先に進めてくれる。使ってるやつとつかってないコードの比較はURL。
https://stackoverflow.com/questions/56973265/what-does-express-async-handler-do

controllerにて
```
if (userExists) {
res.status(400);
throw new Error("User already exists.");
}
```
このコードがあるおかげで、POSTを同じbodyで二回しようとしたら、二回目はエラー出てくる、もうユーザーいるよーって。  

modelにて
授業では、authっていうファイルを作ったりしてパスワードをencryptしてたけど、ここではmodelの中でスキーマ自体に組み込んでる。
pre('save...' xxx)の意味は、コレクションとかの作業の時、saveする前に、xxxしろっていうことらしい。  
  
user.isModified('password')　これは、ハッシュ化されていないパスワードがある時にtrueを返す。
https://qiita.com/Molly95554907/items/9f2f148d09470eb81f5a

### エラーハンドラー。  
notFound と　general errorだって。
多分、stack: process.env.NODE_ENV === "production" ? null : err.stack,の部分に関しては、開発者がNODE_ENVがまだ開発中（development）だったらエラーを出して、productionだったらエラーなし、みたいな？わからんけど今はわからんでいいって。
23:20でユーザーダブル登録した時のエラーメッセージが変化してる。さらにわかりやすくなったと彼は言ってる。
コントローラでexpress-async-handler使ってて、授業ではエラー出てたら止めてたけど、エラーでたもnextでエラーを飛ばしてる。そのエラーがapp.use(notFound)とか(errorHandler)にわたってるんじゃないかと思うよ。

### ログインしてみる。　　

一点注意。postmanで一旦/api/usersでユーザ登録してトークンとかオーソライズとかされた情報のemailとパスワードである必要がある。じゃないと、401unauthorized（さっき設定したエラー）がコンソールログに出てくる。

localstrageにuserinfoというものが入ってるので、確認してみよう。

### { history }って入れた。結構大事っぽい。本人曰く、Routerの機能の一つを作るため、propsみたいにhistoryと入れるっぽい。
###　　localstrageへの布石
一旦LoginScreenjsに作ったのに、LandingPage.jsに持ってった。よくわからん。

### ログインページに続き、Registerページからデータフェッチ。バイバイポストまん？
成功したかどうか、確かめて。MongoDBに入ってるはず。また、パスワードと確認用パスワードを違うものいれて、エラーポップアップが出るかどうかも確かめて。

### 写真のアップについて
ビデオのとおりでいいけど、途中URLがどこにも見つからない。
これでおっけ。クラウド名をdemoって部分に貼り付けたらいいんじゃないかと。
https://cloudinary.com/documentation/image_upload_api_reference
https://zenn.dev/horisan/articles/2aeaf0bd3fb70f

setPic(data.url.toString());の上に、console.log(data);を置いてる。写真を選択したら、コンソールにオブジェクトが出てきて、URLという項目をコピーしてブラウザに貼り付けたら、ちゃんとクラウドに入っていることが確認できる。  


### Logoutでバグ、てかreact-router-domのバージョン変わったから
historyを入れるとバグる。なぜなら、useHistoryそんなもんないよって言ってくる。
答えはここ。useHistoryをuseNavigationに置き換え、history.push()としていたところを、history()にする。
https://github.com/remix-run/react-router/issues/7189

# #11

### まずはnpmで諸々インストール、store.js,そしてindex.jsにコード追加。
その流れでchromeの拡張機能とnpm install redux-dev-toolsを同時にインストール。9：30
composeWithDevTools(applyMiddleware(...middleware))のcodeでcomposeの部分は多分、通常は必要ないけどghromeの拡張機能にstate/store情報を表示させるために必要なんじゃないかと思う。このcomposeWithDevTools()がなくなれば、chrome右上の拡張機能アイコンも緑色にならないから、多分そうだと思う。

### chrome拡張機能が働いてる
15:00段階でreducerがベースの形に仕上がって、storeにreducerを持ってくる。その状態で拡張機能みたら、もう初期値のstateが入ってることが確認できる。

### Reduxのthunkがなぜあるのかっていう、ちょっと触りの部分。非同期通信のためだよー。15：50
https://qiita.com/jima-r20/items/7fee2f00dbd1f302e373  

### Bug!!  
LoginScreenの引数{history}を削除。エラーでるし、これUndefined。結局、react-routerの仕様変更によって、この機能も使えなくなったっぽくて、ビデオ下のコメントに、ここで直にuseNavigation使って解決したわーっていうコメントあったから、自分もそうした。どこかでまたバグあるかもだけど、様子見。

### initialState設定忘れてたらしい、28：10

# #13  

### Bug発生。historyに続き、matchも使えなくなっていると。

代わりにuseParamsを使いなさいと。使い方あってるかわからんけど、一応動いてる。
https://blog.logrocket.com/react-router-v6-future-reach-router/#the-useparams-hook
あと、同じくSingleNoteの上3つのusestateの初期値が、useState()になっててWarning: A component is changing an uncontrolled input to be controlled.っていうエラーがでてくる、（””）ちゃんと入れておく。

### 意外と知らなかった、コンポーネントの作り方。
42：10参照。return抜きでもコンポーネント作れる。ただそのreturnの前にuseStateとかfunctionとか入れない場合に限る。

# #14

### 微調整的な。
ちょっと遅くなったけど、微調整。Header.jsで、ログインしている状態とそうでない状態でヘッダー右上の選択画面が変わるようにした。加えて、LandingPage.jsは、ログインしてたら、ランディングページに飛ばすのではなくて、mynotesにいくようにしたっつーこと。
他、前半はプロファイルページの準備。

