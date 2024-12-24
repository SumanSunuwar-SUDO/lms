export const handleSingeFileController = async (req, res, next) => {
    try {
        let link = `http://localhost:111/${req.file.filename}`;
        res.status(200).json({
            success: true,
            message: "File uploaded psuccessfully",
            result: link,
        });
        console.log(link);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};