const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
        answers: [
            'スーパーファミコン',
            'プレイステーション2',
            'ニンテンドーースイッチ',
            'ニンテンドーDS'
        ],
        correct:　'ニンテンドーDS',
    },{
        question:'次のうち、マサが行っていない場所はどこ？',
        answers: [
            '下北沢',
            '北千住',
            'お台場',
            '浅草'
        ],
        correct:　'北千住',
    },{
        question:'一番男前なのは次のうち誰？',
        answers: [
            '木村拓哉',
            '向井理',
            '松本将尚',
            '福士蒼汰'
        ],
        correct:　'松本将尚',
    }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler  = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解');
        score++;
        }else{
        window.alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数がまだあればこちらを実行
            setupQuiz();
    }else{
        //問題数がもうなければこちらを実行
        window.alert('終了！あなたの正解数は' +  quizLength + '問中' + score + '問です！')
    }
};



//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
