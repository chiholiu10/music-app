import {useEffect, useState} from 'react';
import axios from 'axios';

interface Genre {
    id: number;
    name: string;
}

interface Videos {
    artist: string;
    genre_id: number;
    id: number;
    image_url: string;
    release_year: number;
    title: string;
}

export const SearchInput = () => {
    // eslint-disable-next-line
    const [inputValue, setInputValue] = useState("");
    const [videos, setVideos] = useState<Videos[]>([])
    const passInput = (searchText: string) => {
        setInputValue(String(searchText));
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json');
                setVideos(response.data.videos);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

    let filterVideo = (data: any) => {
        if(2014 !== data.release_year || !data.artist.toLowerCase().includes(inputValue)) return false;
        return true;
    }

    let videoResults = videos.filter(filterVideo).map(item => {
        return (
            <div key={item.id}>
                <div>{item.id}</div>
                <div>{item.artist}</div>
                <div>{item.genre_id}</div>
                <img src={item.image_url} alt={item.title}/>
                <div>{item.release_year}</div>
                <div>{item.title}</div>
            </div>
        )
    })

    return (
        <div>
            <input type="text" onChange={(e) => passInput(e.target.value)}/>
            <div>{videoResults}</div>
        </div>
    )
}