import Loader from './loader';

class AppLoader extends Loader {
    public constructor() {
        const apiUrl = process.env.API_URL as string;
        const apiKey = process.env.API_KEY as string;
        super(apiUrl, {
            apiKey: apiKey,
        });
    }
}

export default AppLoader;
