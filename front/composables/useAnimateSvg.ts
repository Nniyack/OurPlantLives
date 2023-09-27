export default () => {
  if (typeof document !== undefined) {
    let path = document.querySelector("path");
    if (path !== null) {
      var pathLength = path ? path?.getTotalLength() : 0;
      console.log(pathLength);
      path.style.strokeDasharray = pathLength + "  " + pathLength;
      path.style.strokeDashoffset = String(pathLength);
    }
    window.addEventListener("scroll", () => {
      console.log("ok");
      var scrollPercentage =
        (document.documentElement.scrollTop +
          Number(document.body.scrollTop)) /
        (document.documentElement.scrollHeight +
          document.documentElement.clientHeight);

      var drawLength = pathLength * scrollPercentage;

      if (path !== null) {
        path.style.strokeDashoffset = String(pathLength - drawLength);
        console.log(
          path.style.strokeDashoffset,
          path.style.strokeDasharray,
          path.style.strokeDashoffset
        );
      }
    });
  }
}