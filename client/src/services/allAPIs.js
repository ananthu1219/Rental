import commonAPI from './commonAPI';
import { serverURL } from './serverUrl';

export const getAllBikes = async () => {
    const response = await commonAPI('GET', `${serverURL}/api/getBikes`, {}, {});
    return response.data;
}
