function calc(event) {
  /*getting data from form*/
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  /*getting data to show errors*/
  var errorDay = document.getElementById("none")
  var errorMonth = document.getElementById("monthone")
  if (day === "" || month === "") {
    errorDay.classList.remove("none");
    errorMonth.classList.remove("none")
  } else {
  }

  /*vars to show results*/
  const yearsResult = document.getElementById("years-result");
  const monthsResult = document.getElementById("months-result");
  const daysResult = document.getElementById("days-result");
  var todo = '"' + month + "-" + day + "-" + year + '"'; /*concat all vars */
  var today = new Date();
  var fechaNac = new Date(todo);
  var edad = today.getFullYear() - fechaNac.getFullYear();
  var meses = today.getMonth() - fechaNac.getMonth();
  var dias = today.getDate() - fechaNac.getDate();
  /*validations*/


  if (meses < 0 || (meses === 0 && dias < 0)) {
    edad--;
    meses += 12;
  }
  if (dias < 0) {
    meses--;
    dias += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  yearsResult.innerHTML = `
  ${edad}
  `;
  monthsResult.innerHTML = `
  ${meses}
  `;
  daysResult.innerHTML = `
  ${dias}
  `;
}








