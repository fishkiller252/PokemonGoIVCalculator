$(document).ready(function(){
    var requireStardust = [
        200,	400,	600,	800,	1000,
		1300,	1600,	1900,	2200,	2500,
		3000,	3500,	4000,	4500,	5000,
		6000,	7000,	8000,	9000,	10000
    ];

    var pokedex = [
        {name:フシギダネ, base: { stamina:118, attack: 118, defense:90} },
{name:フシギソウ, base: { stamina:151, attack: 151, defense:120} },
{name:フシギバナ, base: { stamina:198, attack: 198, defense:160} },
{name:ヒトカゲ, base: { stamina:116, attack: 96, defense:78} },
{name:リザード, base: { stamina:158, attack: 129, defense:116} },
{name:リザードン, base: { stamina:223, attack: 176, defense:156} },
{name:ゼニガメ, base: { stamina:94, attack: 122, defense:88} },
{name:カメール, base: { stamina:126, attack: 155, defense:118} },
{name:カメックス, base: { stamina:171, attack: 210, defense:158} },
{name:キャタピー, base: { stamina:55, attack: 62, defense:90} },
{name:トランセル, base: { stamina:45, attack: 64, defense:100} },
{name:バタフリー, base: { stamina:167, attack: 151, defense:120} },
{name:ビードル, base: { stamina:63, attack: 55, defense:80} },
{name:コクーン, base: { stamina:46, attack: 86, defense:90} },
{name:スピアー, base: { stamina:169, attack: 150, defense:130} },
{name:ポッポ, base: { stamina:85, attack: 76, defense:80} },
{name:ピジョン, base: { stamina:117, attack: 108, defense:126} },
{name:ピジョット, base: { stamina:166, attack: 157, defense:166} },
{name:コラッタ, base: { stamina:103, attack: 70, defense:60} },
{name:ラッタ, base: { stamina:161, attack: 144, defense:110} },
{name:オニスズメ, base: { stamina:112, attack: 61, defense:80} },
{name:オニドリル, base: { stamina:182, attack: 135, defense:130} },
{name:アーボ, base: { stamina:110, attack: 102, defense:70} },
{name:アーボック, base: { stamina:167, attack: 158, defense:120} },
{name:ピカチュウ, base: { stamina:112, attack: 101, defense:70} },
{name:ライチュウ, base: { stamina:192, attack: 165, defense:120} },
{name:サンド, base: { stamina:126, attack: 145, defense:100} },
{name:サンドパン, base: { stamina:182, attack: 202, defense:150} },
{name:ニドラン♀, base: { stamina:86, attack: 94, defense:110} },
{name:ニドリーナ, base: { stamina:117, attack: 126, defense:140} },
{name:ニドクイン, base: { stamina:180, attack: 174, defense:180} },
{name:ニドラン♂, base: { stamina:105, attack: 76, defense:92} },
{name:ニドリーノ, base: { stamina:137, attack: 112, defense:122} },
{name:ニドキング, base: { stamina:204, attack: 157, defense:162} },
{name:ピッピ, base: { stamina:107, attack: 116, defense:140} },
{name:ピクシー, base: { stamina:178, attack: 171, defense:190} },
{name:ロコン, base: { stamina:96, attack: 122, defense:76} },
{name:キュウコン, base: { stamina:169, attack: 204, defense:146} },
{name:プリン, base: { stamina:80, attack: 44, defense:230} },
{name:プクリン, base: { stamina:156, attack: 93, defense:280} },
{name:ズバット, base: { stamina:83, attack: 76, defense:80} },
{name:ゴルバット, base: { stamina:161, attack: 153, defense:150} },
{name:ナゾノクサ, base: { stamina:131, attack: 116, defense:90} },
{name:クサイハナ, base: { stamina:153, attack: 139, defense:120} },
{name:ラフレシア, base: { stamina:202, attack: 170, defense:150} },
{name:パラス, base: { stamina:121, attack: 99, defense:70} },
{name:パラセクト, base: { stamina:165, attack: 146, defense:120} },
{name:コンパン, base: { stamina:100, attack: 102, defense:120} },
{name:モルフォン, base: { stamina:179, attack: 150, defense:140} },
{name:ディグダ, base: { stamina:109, attack: 88, defense:20} },
{name:ダグトリオ, base: { stamina:167, attack: 147, defense:70} },
{name:ニャース, base: { stamina:92, attack: 81, defense:80} },
{name:ペルシアン, base: { stamina:150, attack: 139, defense:130} },
{name:コダック, base: { stamina:122, attack: 96, defense:100} },
{name:ゴルダック, base: { stamina:191, attack: 163, defense:160} },
{name:マンキー, base: { stamina:148, attack: 87, defense:80} },
{name:オコリザル, base: { stamina:207, attack: 144, defense:130} },
{name:ガーディ, base: { stamina:136, attack: 96, defense:110} },
{name:ウインディ, base: { stamina:227, attack: 166, defense:180} },
{name:ニョロモ, base: { stamina:101, attack: 82, defense:80} },
{name:ニョロゾ, base: { stamina:130, attack: 130, defense:130} },
{name:ニョロボン, base: { stamina:182, attack: 187, defense:180} },
{name:ケーシィ, base: { stamina:195, attack: 103, defense:50} },
{name:ユンゲラー, base: { stamina:232, attack: 138, defense:80} },
{name:フーディン, base: { stamina:271, attack: 194, defense:110} },
{name:ワンリキー, base: { stamina:137, attack: 88, defense:140} },
{name:ゴーリキー, base: { stamina:177, attack: 130, defense:160} },
{name:カイリキー, base: { stamina:234, attack: 162, defense:180} },
{name:マダツボミ, base: { stamina:139, attack: 64, defense:100} },
{name:ウツドン, base: { stamina:172, attack: 95, defense:130} },
{name:ウツボット, base: { stamina:207, attack: 138, defense:160} },
{name:メノクラゲ, base: { stamina:97, attack: 182, defense:80} },
{name:ドククラゲ, base: { stamina:166, attack: 237, defense:160} },
{name:イシツブテ, base: { stamina:132, attack: 163, defense:80} },
{name:ゴローン, base: { stamina:164, attack: 196, defense:110} },
{name:ゴローニャ, base: { stamina:211, attack: 229, defense:160} },
{name:ポニータ, base: { stamina:170, attack: 132, defense:100} },
{name:ギャロップ, base: { stamina:207, attack: 167, defense:130} },
{name:ヤドン, base: { stamina:109, attack: 109, defense:180} },
{name:ヤドラン, base: { stamina:177, attack: 194, defense:190} },
{name:コイル, base: { stamina:165, attack: 128, defense:50} },
{name:レアコイル, base: { stamina:223, attack: 182, defense:100} },
{name:カモネギ, base: { stamina:124, attack: 118, defense:104} },
{name:ドードー, base: { stamina:158, attack: 88, defense:70} },
{name:ドードリオ, base: { stamina:218, attack: 145, defense:120} },
{name:パウワウ, base: { stamina:85, attack: 128, defense:130} },
{name:ジュゴン, base: { stamina:139, attack: 184, defense:180} },
{name:ベトベター, base: { stamina:135, attack: 90, defense:160} },
{name:ベトベトン, base: { stamina:190, attack: 184, defense:210} },
{name:シェルダー, base: { stamina:116, attack: 168, defense:60} },
{name:パルシェン, base: { stamina:186, attack: 323, defense:100} },
{name:ゴース, base: { stamina:186, attack: 70, defense:60} },
{name:ゴースト, base: { stamina:223, attack: 112, defense:90} },
{name:ゲンガー, base: { stamina:261, attack: 156, defense:120} },
{name:イワーク, base: { stamina:85, attack: 288, defense:70} },
{name:スリープ, base: { stamina:89, attack: 158, defense:120} },
{name:スリーパー, base: { stamina:144, attack: 215, defense:170} },
{name:クラブ, base: { stamina:181, attack: 156, defense:60} },
{name:キングラー, base: { stamina:240, attack: 214, defense:110} },
{name:ビリリダマ, base: { stamina:109, attack: 114, defense:80} },
{name:マルマイン, base: { stamina:173, attack: 179, defense:120} },
{name:タマタマ, base: { stamina:107, attack: 140, defense:120} },
{name:ナッシー, base: { stamina:233, attack: 158, defense:190} },
{name:カラカラ, base: { stamina:90, attack: 165, defense:100} },
{name:ガラガラ, base: { stamina:144, attack: 200, defense:120} },
{name:サワムラー, base: { stamina:224, attack: 211, defense:100} },
{name:エビワラー, base: { stamina:193, attack: 212, defense:100} },
{name:ベロリンガ, base: { stamina:108, attack: 137, defense:180} },
{name:ドガース, base: { stamina:119, attack: 164, defense:80} },
{name:マタドガス, base: { stamina:174, attack: 221, defense:130} },
{name:サイホーン, base: { stamina:140, attack: 157, defense:160} },
{name:サイドン, base: { stamina:222, attack: 206, defense:210} },
{name:ラッキー, base: { stamina:60, attack: 176, defense:500} },
{name:モンジャラ, base: { stamina:183, attack: 205, defense:130} },
{name:ガルーラ, base: { stamina:181, attack: 165, defense:210} },
{name:タッツー, base: { stamina:129, attack: 125, defense:60} },
{name:シードラ, base: { stamina:187, attack: 182, defense:110} },
{name:トサキント, base: { stamina:123, attack: 115, defense:90} },
{name:アズマオウ, base: { stamina:175, attack: 154, defense:160} },
{name:ヒトデマン, base: { stamina:137, attack: 112, defense:60} },
{name:スターミー, base: { stamina:210, attack: 184, defense:120} },
{name:バリヤード, base: { stamina:192, attack: 233, defense:80} },
{name:ストライク, base: { stamina:218, attack: 170, defense:140} },
{name:ルージュラ, base: { stamina:223, attack: 182, defense:130} },
{name:エレブー, base: { stamina:198, attack: 173, defense:130} },
{name:ブーバー, base: { stamina:206, attack: 169, defense:130} },
{name:カイロス, base: { stamina:238, attack: 197, defense:130} },
{name:ケンタロス, base: { stamina:198, attack: 197, defense:150} },
{name:コイキング, base: { stamina:29, attack: 102, defense:40} },
{name:ギャラドス, base: { stamina:237, attack: 197, defense:190} },
{name:ラプラス, base: { stamina:165, attack: 180, defense:260} },
{name:メタモン, base: { stamina:91, attack: 91, defense:96} },
{name:イーブイ, base: { stamina:104, attack: 121, defense:110} },
{name:シャワーズ, base: { stamina:205, attack: 177, defense:260} },
{name:サンダース, base: { stamina:232, attack: 201, defense:130} },
{name:ブースター, base: { stamina:246, attack: 204, defense:130} },
{name:ポリゴン, base: { stamina:153, attack: 139, defense:130} },
{name:オムナイト, base: { stamina:155, attack: 174, defense:70} },
{name:オムスター, base: { stamina:207, attack: 227, defense:140} },
{name:カブト, base: { stamina:148, attack: 162, defense:60} },
{name:カブトプス, base: { stamina:220, attack: 203, defense:120} },
{name:プテラ, base: { stamina:221, attack: 164, defense:160} },
{name:カビゴン, base: { stamina:190, attack: 190, defense:320} },
{name:フリーザー, base: { stamina:192, attack: 249, defense:180} },
{name:サンダー, base: { stamina:253, attack: 188, defense:180} },
{name:ファイヤー, base: { stamina:251, attack: 184, defense:180} },
{name:ミニリュウ, base: { stamina:119, attack: 94, defense:82} },
{name:ハクリュー, base: { stamina:163, attack: 138, defense:122} },
{name:カイリュー, base: { stamina:263, attack: 201, defense:182} },
{name:ミュウツー, base: { stamina:330, attack: 200, defense:212} },
{name:ミュウ, base: { stamina:210, attack: 210, defense:200} },
{name:チコリータ, base: { stamina:92, attack: 122, defense:90} },
{name:ベイリーフ, base: { stamina:122, attack: 155, defense:120} },
{name:メガニウム, base: { stamina:168, attack: 202, defense:160} },
{name:ヒノアラシ, base: { stamina:116, attack: 96, defense:78} },
{name:マグマラシ, base: { stamina:158, attack: 129, defense:116} },
{name:バクフーン, base: { stamina:223, attack: 176, defense:156} },
{name:ワニノコ, base: { stamina:117, attack: 116, defense:100} },
{name:アリゲイツ, base: { stamina:150, attack: 151, defense:130} },
{name:オーダイル, base: { stamina:205, attack: 197, defense:170} },
{name:オタチ, base: { stamina:79, attack: 77, defense:70} },
{name:オオタチ, base: { stamina:148, attack: 130, defense:170} },
{name:ホーホー, base: { stamina:67, attack: 101, defense:120} },
{name:ヨルノズク, base: { stamina:145, attack: 179, defense:200} },
{name:レディバ, base: { stamina:72, attack: 142, defense:80} },
{name:レディアン, base: { stamina:107, attack: 209, defense:110} },
{name:イトマル, base: { stamina:105, attack: 73, defense:80} },
{name:アリアドス, base: { stamina:161, attack: 128, defense:140} },
{name:クロバット, base: { stamina:194, attack: 178, defense:170} },
{name:チョンチー, base: { stamina:106, attack: 106, defense:150} },
{name:ランターン, base: { stamina:146, attack: 146, defense:250} },
{name:ピチュー, base: { stamina:77, attack: 63, defense:40} },
{name:ピィ, base: { stamina:75, attack: 91, defense:100} },
{name:ププリン, base: { stamina:69, attack: 34, defense:180} },
{name:トゲピー, base: { stamina:67, attack: 116, defense:70} },
{name:トゲチック, base: { stamina:140, attack: 191, defense:110} },
{name:ネイティ, base: { stamina:134, attack: 89, defense:80} },
{name:ネイティオ, base: { stamina:192, attack: 146, defense:130} },
{name:メリープ, base: { stamina:114, attack: 82, defense:110} },
{name:モココ, base: { stamina:145, attack: 112, defense:140} },
{name:デンリュウ, base: { stamina:211, attack: 172, defense:180} },
{name:キレイハナ, base: { stamina:169, attack: 189, defense:150} },
{name:マリル, base: { stamina:37, attack: 93, defense:140} },
{name:マリルリ, base: { stamina:112, attack: 152, defense:200} },
{name:ウソッキー, base: { stamina:167, attack: 198, defense:140} },
{name:ニョロトノ, base: { stamina:174, attack: 192, defense:180} },
{name:ハネッコ, base: { stamina:67, attack: 101, defense:70} },
{name:ポポッコ, base: { stamina:91, attack: 127, defense:110} },
{name:ワタッコ, base: { stamina:118, attack: 197, defense:150} },
{name:エイパム, base: { stamina:136, attack: 112, defense:110} },
{name:ヒマナッツ, base: { stamina:55, attack: 55, defense:60} },
{name:キマワリ, base: { stamina:185, attack: 148, defense:150} },
{name:ヤンヤンマ, base: { stamina:154, attack: 94, defense:130} },
{name:ウパー, base: { stamina:75, attack: 75, defense:110} },
{name:ヌオー, base: { stamina:152, attack: 152, defense:190} },
{name:エーフィ, base: { stamina:261, attack: 194, defense:130} },
{name:ブラッキー, base: { stamina:126, attack: 250, defense:190} },
{name:ヤミカラス, base: { stamina:175, attack: 87, defense:120} },
{name:ヤドキング, base: { stamina:177, attack: 194, defense:190} },
{name:ムウマ, base: { stamina:167, attack: 167, defense:120} },
{name:アンノーン, base: { stamina:136, attack: 91, defense:96} },
{name:ソーナンス, base: { stamina:60, attack: 106, defense:380} },
{name:キリンリキ, base: { stamina:182, attack: 133, defense:140} },
{name:クヌギダマ, base: { stamina:108, attack: 146, defense:100} },
{name:フォレトス, base: { stamina:161, attack: 242, defense:150} },
{name:ノコッチ, base: { stamina:131, attack: 131, defense:200} },
{name:グライガー, base: { stamina:143, attack: 204, defense:130} },
{name:ハガネール, base: { stamina:148, attack: 333, defense:150} },
{name:ブルー, base: { stamina:137, attack: 89, defense:120} },
{name:グランブル, base: { stamina:212, attack: 137, defense:180} },
{name:ハリーセン, base: { stamina:184, attack: 148, defense:130} },
{name:ハッサム, base: { stamina:236, attack: 191, defense:140} },
{name:ツボツボ, base: { stamina:17, attack: 396, defense:40} },
{name:ヘラクロス, base: { stamina:234, attack: 189, defense:160} },
{name:ニューラ, base: { stamina:189, attack: 157, defense:110} },
{name:ヒメグマ, base: { stamina:142, attack: 93, defense:120} },
{name:リングマ, base: { stamina:236, attack: 144, defense:180} },
{name:マグマッグ, base: { stamina:118, attack: 71, defense:80} },
{name:マグカルゴ, base: { stamina:139, attack: 209, defense:100} },
{name:ウリムー, base: { stamina:90, attack: 74, defense:100} },
{name:イノムー, base: { stamina:181, attack: 147, defense:200} },
{name:サニーゴ, base: { stamina:118, attack: 156, defense:110} },
{name:テッポウオ, base: { stamina:127, attack: 69, defense:70} },
{name:オクタン, base: { stamina:197, attack: 141, defense:150} },
{name:デリバード, base: { stamina:128, attack: 90, defense:90} },
{name:マンタイン, base: { stamina:149, attack: 260, defense:130} },
{name:エアームド, base: { stamina:149, attack: 260, defense:130} },
{name:デルビル, base: { stamina:152, attack: 93, defense:90} },
{name:ヘルガー, base: { stamina:224, attack: 159, defense:150} },
{name:キングドラ, base: { stamina:194, attack: 194, defense:150} },
{name:ゴマゾウ, base: { stamina:107, attack: 107, defense:180} },
{name:ドンファン, base: { stamina:214, attack: 214, defense:180} },
{name:ポリゴン2, base: { stamina:198, attack: 183, defense:170} },
{name:オドシシ, base: { stamina:192, attack: 132, defense:146} },
{name:ドーブル, base: { stamina:40, attack: 88, defense:110} },
{name:バルキー, base: { stamina:64, attack: 64, defense:70} },
{name:カポエラー, base: { stamina:173, attack: 214, defense:100} },
{name:ムチュール, base: { stamina:153, attack: 116, defense:90} },
{name:エレキッド, base: { stamina:135, attack: 110, defense:90} },
{name:ブビィ, base: { stamina:151, attack: 108, defense:90} },
{name:ミルタンク, base: { stamina:158, attack: 211, defense:190} },
{name:ハピナス, base: { stamina:129, attack: 229, defense:510} },
{name:ライコウ, base: { stamina:241, attack: 210, defense:180} },
{name:エンテイ, base: { stamina:235, attack: 176, defense:230} },
{name:スイクン, base: { stamina:180, attack: 235, defense:200} },
{name:ヨーギラス, base: { stamina:115, attack: 93, defense:100} },
{name:サナギラス, base: { stamina:155, attack: 133, defense:140} },
{name:バンギラス, base: { stamina:251, attack: 212, defense:200} },
{name:ルギア, base: { stamina:193, attack: 323, defense:212} },
{name:ホウオウ, base: { stamina:263, attack: 301, defense:212} },
{name:セレビィ, base: { stamina:210, attack: 210, defense:200} }

    ]
    var CPM = [
        0.094, 0.1351374, 0.1663979, 0.1926509, 0.2157325,
        0.2365727, 0.2557201, 0.2735304, 0.2902499, 0.3060574,
        0.3210876, 0.335445, 0.3492127, 0.3624578, 0.3752356,
        0.3875924, 0.3995673, 0.4111936, 0.4225, 0.4335117,
        0.4431076, 0.45306, 0.4627984, 0.4723361, 0.481685,
        0.4908558, 0.4998584, 0.5087018, 0.517394, 0.5259425,
        0.5343543, 0.5426358, 0.5507927, 0.5588306, 0.5667545,
        0.5745692, 0.5822789, 0.5898879, 0.5974, 0.6048188,
        0.6121573, 0.6194041, 0.6265671, 0.6336492, 0.640653,
        0.647581, 0.6544356, 0.6612193, 0.667934, 0.6745819,
        0.6811649, 0.6876849, 0.6941437, 0.7005429, 0.7068842,
        0.7131691, 0.7193991, 0.7255756, 0.7317, 0.734741,
        0.7377695, 0.7407856, 0.7437894, 0.7467812, 0.749761,
        0.7527291, 0.7556855, 0.7586304, 0.7615638, 0.7644861,
        0.7673972, 0.7702973, 0.7731865, 0.776065, 0.7789328,
        0.7817901, 0.784637, 0.7874736, 0.7903, 0.7931164
    ]

    var makeNames = function() {
        var names = []
        $.each(pokedex, function(idx, data) {
            names.push(data['name'])
        })
        return names;
    }
    $('#name').autocomplete({
        source: makeNames(),
        autoFocus: true,
        delay: 500,
        minLength: 2
    });
    var init = function() {
        var stardust = $('#stardust')
        for (var i = 0; i < requireStardust.length; i++) {
            stardust.append($("<option>").val(i).text(requireStardust[i]));
        }

        var selectName = $('#select-name');
        $.each(pokedex, function(idx, value) {
            var name = value['name'];
            selectName.append($("<option>").val(name).text(name));
        })
    }
    init();

    var getBaseStats = function(name) {
        var base = null
        $.each(pokedex, function(idx, data) {
            if (name == data['name'])
                base = data['base'];
        });
        return base
    }

    var getInput = function() {
        return {
            name: $('input[name="name"]').val(),
            cp: +$('input[name="cp"]').val(),
            hp: +$('input[name="hp"]').val(),
            stardustIndex: +$('#stardust').val()
        };
    }

    var sum = function(base, iv, type) {
        return base[type] + iv[type];
    }

    var getRangeText = function(ary) {
        var min = Math.min.apply(null, ary);
        var max = Math.max.apply(null, ary);
        if (min == max) {
            return String(min);
        } else {
            return min + "〜" + max;
        }
    }

    var calcCP = function(base, iv, cpm) {
        var cp = sum(base, iv, 'attack') * Math.pow(sum(base, iv, 'defense'), 0.5) *
                    Math.pow(sum(base, iv, 'stamina'), 0.5) * Math.pow(cpm, 2) / 10
        return Math.max(10, Math.floor(cp))
    }

    var calcHP = function(base, iv, cpm) {
        return Math.max(10, Math.floor(sum(base, iv, 'stamina') * cpm));
    }

    var calcIV = function(result, level, input) {
        var base = getBaseStats(input.name);
        var curCP = input.cp;
        var curHP = input.hp;

        for(var s = 0; s < 16; s++) {
            var hp = calcHP(base, {stamina: s}, CPM[level]);
            if (hp != curHP) continue;

            for(var a = 0; a < 16; a++) {
                for(var d = 0; d < 16; d++) {
                    var iv = {stamina: s, attack: a, defense: d};
                    var cp = calcCP(base, iv, CPM[level]);
                    if (cp == curCP) {
                        result.push({level: level, attack: a, defense: d, stamina: s});
                    }
                }
            }
        }
    }

    var sameIVindexOf = function(ary, value) {
        var ret = -1;
        $.each(ary, function(idx, v) {
            if (v['attack'] == value['attack'] &&
                v['defense'] == value['defense'] &&
                v['stamina'] == value['stamina']) {
                    ret = idx;
                }
        })
        return ret;
    }

    var intersect = function(ary1, ary2) {
        var ret = [];
        $.each(ary1, function(idx, v) {
            if (sameIVindexOf(ary2, v) != -1) {
                ret.push(v);
            }
        })

        return ret;
    }

    var candIVs;

    var refineIV = function(input) {
        var level = input.stardustIndex * 4;
        var res = [];

        for(var i = 0; i < 4; i++) {
            calcIV(res, level + i, input);
        }
        if (candIVs == null) {
            candIVs = res;
        }
        else {
            candIVs = intersect(candIVs, res);
        }
    }

    var clearInputHistory = function() {
        $("#input-history").empty();
    }

    var renderInputHistory = function(input) {
        var $inputHistory = $("#input-history");

        var row = $("<tr></tr>");
        row.append("<td>" + input.cp + "</td>");
        row.append("<td>" + input.hp + "</td>");
        row.append("<td>" + requireStardust[input.stardustIndex] + "</td>");
        $inputHistory.append(row);
    }

    var renderCandIV = function() {
        var result = $("#result");
        result.empty();

        for(var i = 0; i < candIVs.length; i++) {
            var row = $("<tr></tr>");
            row.append("<td>" + (candIVs[i]['level'] / 2 + 1) + "</td>")
            row.append("<td>" + candIVs[i]['attack'] + "</td>")
            row.append("<td>" + candIVs[i]['defense'] + "</td>")
            row.append("<td>" + candIVs[i]['stamina'] + "</td>")
            result.append(row);
        }

        if (candIVs.length == 0) {
            $('#attention').text('個体値を計算できませんでした．CPとHPが10だと個体値の計算に失敗する場合があります．')
        }
        else {
            $('#attention').text('');
        }
    }

    var renderRangeIV = function() {
        var rangeResult = $("#rangeResult");

        rangeResult.empty();

        var result = {};
        var iter = {level: 'レベル', attack: '攻撃', defense: '防御', stamina: 'スタミナ'};

        $.each(iter, function(key, value) {
            result[key] = $.map(candIVs, function(v) {
                if (key == 'level') {
                    return v['level'] / 2 + 1;
                }
                else {
                    return v[key];
                }
            });
            rangeResult.append(makeRow(value, result[key]));
        });

        var mod = function(ary) {
            var str = getRangeText(ary);

            if (str.indexOf('〜') == -1) {
                return str;
            }
            else {
                return "[" + str + "]";
            }
        }

        var textResult = "";
        textResult += $('input[name="name"]').val();
        textResult += "(" + getRangeText(result['level']) + "): "
        textResult +=  mod(result['attack']) + " - ";
        textResult +=  mod(result['defense']) + " - ";
        textResult +=  mod(result['stamina']);
        $("#text-result").val(textResult);
    }

    $('#calcCP').on('click', function() {
        candIVs = null;
        var input = getInput();
        clearInputHistory();

        refineIV(input);

        renderInputHistory(input);
        renderRangeIV();
        renderCandIV();
    })

    $('#refine').on('click', function() {
        var input = getInput();

        refineIV(input);

        renderInputHistory(input);
        renderRangeIV();
        renderCandIV();
    })

    $('#select-name').change(function() {
        $('input[name="name"]').val($(this).val());
    })

    var makeRow = function(label, cand) {
        var row = $("<tr></tr>");
        row.append("<td>" + label + "</td>");

        var min = Math.min.apply(null, cand);
        var max = Math.max.apply(null, cand);
        if (min == max) {
            row.append($("<td>" + getRangeText(cand) + "</td>"));
        } else {
            row.append($("<td>" + getRangeText(cand) + "</td>"));
        }
        return row;
    }
    var clipboard = new Clipboard('#copy-result');

    clipboard.on('success', function(e) {
        e.clearSelection();
    });
})
