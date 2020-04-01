import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID JBLI1IASGcqkmKvnNslHlXQgDaCHXusHj9TvBOjuikc'
    }
});