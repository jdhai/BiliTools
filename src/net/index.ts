import axios from 'axios';
import { TaskConfig } from '../config/globalVar';

axios.defaults.headers['Cookie'] = TaskConfig.COOKIT;

axios.defaults.headers['User-Agent'] =
  TaskConfig.USER_AGENT ||
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36';

axios.defaults.headers['content-type'] = 'application/x-www-form-urlencoded';

export default axios;
