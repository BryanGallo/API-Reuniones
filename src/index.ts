import { app } from "./server.js";
import colors from "colors";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(colors.green(`🚀 Server is running on port ${PORT}`));
});