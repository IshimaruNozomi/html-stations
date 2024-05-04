async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  const result = await test();
  return result.map(buildFullName);
}

function test() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
        { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
      ]);
    }, 3000);
  });
}

function buildFullName(data) {
  const full_name = `${data.family_name} ${data.first_name}`; // 姓と名を半角スペースで繋げる
  data.full_name = full_name; // full_nameプロパティをオブジェクトに追加
  return data; // 変更を加えたオブジェクトを返す
}

(async () => {
  const result = await getData();
  console.log(result);
})();