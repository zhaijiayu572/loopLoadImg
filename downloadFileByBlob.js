export default function(url,filename){
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob"; // 返回类型blob
  xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let blob = this.response;
      // 转换一个blob链接
      let u = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.download = filename;
      a.href = u;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };
  xhr.send();
}
