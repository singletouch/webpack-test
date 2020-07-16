import {indexRun} from "@/view/index";
import {testRun} from "@/view/test";

indexRun()

if(module.hot) {
    module.hot.accept()
}
