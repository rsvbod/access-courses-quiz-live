const mammoth = require("mammoth");
const xlsx = require("xlsx");
const fs = require("fs");

async function main() {
    try {
        const textResult = await mammoth.extractRawText({path: "../Questions.docx"});
        const questionsText = textResult.value;

        const matrixWorkbook = xlsx.readFile("../Access_Courses_Career_Matrix.xlsx");
        const matrixSheet = matrixWorkbook.Sheets[matrixWorkbook.SheetNames[0]];
        const matrixData = xlsx.utils.sheet_to_json(matrixSheet);

        const outcomesWorkbook = xlsx.readFile("../Access_Courses_Quiz_Outcomes.xlsx");
        const outcomesSheet = outcomesWorkbook.Sheets[outcomesWorkbook.SheetNames[0]];
        const outcomesData = xlsx.utils.sheet_to_json(outcomesSheet);

        const result = {
            questionsText,
            matrixData,
            outcomesData
        };

        fs.writeFileSync("../data.json", JSON.stringify(result, null, 2), "utf8");
        console.log("Written to data.json");

    } catch (e) {
        console.error(e);
    }
}

main();
