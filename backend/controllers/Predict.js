import { spawn } from "child_process";

const handlePrediction = async (req,res) => {
    console.log("handlePrediction callled");
    //console.log(req.body);
    let predictionVal = ""
    const python = spawn("python", ["controllers/predict.py", JSON.stringify(req.body)]);
    python.stdout.on("data", (data) => {
        console.log("python data: ", data);
        predictionVal = data.toString();
    });
    python.stderr.on("data", (data) => {
        console.error("python error:", data.toString());
        // Handle the error as needed, e.g., send an error response to the client
        // res.status(500).json({ error: "Internal Server Error" });
    });
    python.on("close", (code, signal) => {
        console.log(`process closed: code ${code} and signal ${signal}`);
        console.log(predictionVal);
        res.status(200).send({"Result":predictionVal})
    }
    );

    
};

export default handlePrediction;
