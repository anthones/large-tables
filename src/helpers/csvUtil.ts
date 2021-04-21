const downloadCSV = (csv: BlobPart, filename: string): void => {
  let csvFile: Blob;
  let downloadLink: HTMLAnchorElement = document.createElement("a");

  csvFile = new Blob([csv], { type: "text/csv" });
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
};

export const exportTableToCSV = (filename: string): void => {
  const csv = [];
  const rows = document.querySelectorAll("table tr");

  for (var i = 0; i < rows.length; i++) {
    var row = [],
      cols = rows[i].querySelectorAll("td, th");

    for (var j = 0; j < cols.length; j++)
      row.push((cols[j] as HTMLElement).innerText);

    csv.push(row.join(","));
  }

  downloadCSV(csv.join("\n"), filename);
};
