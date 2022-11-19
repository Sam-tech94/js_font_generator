let db = [
    { "word": "布丁", "freq": 70, },
    { "word": "name", "freq": 38, },
    { "word": "false", "freq": 38, },
    { "word": "var", "freq": 28 },
    { "word": "rstudio", "freq": 26 },
    { "word": "true", "freq": 22 },
    { "word": "留言", "freq": 20 },
    { "word": "url", "freq": 20 },
    { "word": "server", "freq": 20 },
    { "word": "分享", "freq": 18 },
    { "word": "課程", "freq": 18 },
    { "word": "連結", "freq": 18 },
    { "word": "openvz", "freq": 17 },
    { "word": "什麼", "freq": 16 },
    { "word": "wordcloud", "freq": 15 },
    { "word": "virtual", "freq": 15 },
    { "word": "機器", "freq": 15 },
    { "word": "虛擬", "freq": 15 },
    { "word": "target", "freq": 14 },
    { "word": "key", "freq": 14 },
    { "word": "文字", "freq": 14 },
    { "word": "sharemessage", "freq": 14 },
    { "word": "資訊", "freq": 13 },
    { "word": "字形", "freq": 13 },
    { "word": "google", "freq": 13 },
    { "word": "null", "freq": 12 },
    { "word": "閱讀", "freq": 12 },
    { "word": "中文", "freq": 12 },
    { "word": "data", "freq": 12 },
    { "word": "displaymodefull", "freq": 12 },
    { "word": "研究", "freq": 11 },
    { "word": "linux", "freq": 11 },
    { "word": "程式", "freq": 10 },
    { "word": "檔案", "freq": 10 },
    { "word": "系統", "freq": 10 },
    { "word": "服務", "freq": 10 },
    { "word": "function", "freq": 10 },
    { "word": "需要", "freq": 9 },
    { "word": "建立", "freq": 9 },
    { "word": "使用", "freq": 9 },
    { "word": "管理", "freq": 9 },
    { "word": "titlexdx", "freq": 8 },
    { "word": "postid", "freq": 8 },
    { "word": "httpblogpulipuliinfo", "freq": 8 },
    { "word": "posts", "freq": 8 },
    { "word": "twitter", "freq": 8 },
    { "word": "pinterest", "freq": 8 },
    { "word": "blog", "freq": 8 },
    { "word": "環境", "freq": 8 },
    { "word": "facebook", "freq": 8 },
    { "word": "comments", "freq": 8 },
    { "word": "運作", "freq": 7 },
    { "word": "machine", "freq": 50 },
    { "word": "怎麼", "freq": 6 },
    { "word": "chinese", "freq": 6 },
    { "word": "開箱", "freq": 6 },
    { "word": "語言", "freq": 6 },
    { "word": "httpblogpulipuliinforwordcloudwhyrswordclouddrawshtml", "freq": 5 },
    { "word": "standalone", "freq": 5 },
    { "word": "environment", "freq": 5 },
    { "word": "ubuntu", "freq": 5 },
    { "word": "password", "freq": 5 },
    { "word": "rs", "freq": 5 },
    { "word": "ssh", "freq": 5 },
    { "word": "這個", "freq": 5 },
    { "word": "密碼", "freq": 5 },
    { "word": "設定", "freq": 5 },
    { "word": "draws", "freq": 5 },
    { "word": "已經", "freq": 5 },
    { "word": "httpblogpulipuliinforrstudioserveropenvzstandalonerhtml", "freq": 5 },
    { "word": "安裝", "freq": 4 },
    { "word": "如下", "freq": 4 },
    { "word": "sans", "freq": 4 },
    { "word": "學習", "freq": 4 },
    { "word": "網頁", "freq": 4 },
    { "word": "撰寫", "freq": 4 },
    { "word": "架設", "freq": 4 },
    { "word": "mining", "freq": 4 },
    { "word": "教學", "freq": 4 },
    { "word": "stringnoto", "freq": 4 },
    { "word": "作業", "freq": 4 },
    { "word": "一樣", "freq": 4 },
    { "word": "生活", "freq": 4 },
    { "word": "畫面", "freq": 4 },
    { "word": "文章", "freq": 4 }]


const key = 'AIzaSyB2Czos1aCsEcq9idn_p2HyiGmU9zAwOWo',
    url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${key}`;

list = [];
for (let i in db) {
    list.push([db[i]["word"], db[i]["freq"]])

}

const options = {
    list: list,
};

// font-family data      
async function getData(url) {
    const fetchData = await fetch(url);
    const data = await fetchData.json();
    let output = "";

    data.items.slice(0, 40).forEach(item => {
        output += `
                <option value=${item.family}>${item.family}</option>
            `
    })

    document.querySelector(".select").innerHTML = output;
}

getData(url)

// change size
function changeSize(val) {
    options.minSize = val
    render()
}

// change font
function changeFont(val) {
    options.fontFamily = val
    render()
}

function changeFontWeight(val) {
    options.fontWeight = val;
    render()
}

function changeColor(val) {
    options.color = val;
    render()
}

function changeBackground(val) {
    options.backgroundColor = val;
    render()
}

// add new text
function add(e) {
    e.preventDefault();
    let text = document.querySelector(".add_text").value;
    const result = { "word": text, "freq": 10 };
    list.push([result["word"], result["freq"]])
    document.querySelector(".add_text").value = ""
    render()
}

// Download image
function download() {
    const image = document.getElementById("word_cloud").toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "image.png";
    link.click()
}

const btn = document.querySelector(".download_btn");
btn.addEventListener("click", download)

//render function
function render() {
    options.minFontSize = "15px";
    WordCloud(document.getElementById('word_cloud'), options);
}

render()



