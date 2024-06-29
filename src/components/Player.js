import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icons";

const {
  FaHeart,
  FaRegHeart,
  BsThreeDots,
  MdSkipPrevious,
  MdSkipNext,
  CiRepeat,
  BsPauseFill,
  BsFillPlayFill,
  CiShuffle,
} = icons;

const Player = () => {
  const audioEl = new Audio()
  const { curSongId, isPlaying } = useSelector((state) => state.music);
  const [songinfo, setSonginfo] = useState(null);
  const [source, setSource] = useState(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        apis.getDetailSong(curSongId),
        apis.getSong(curSongId),
      ]);
      if (res1.data.err === 0) {
        setSonginfo(res1.data.data);
      }
      if (res2.data.err === 0) {
        setSource(res2.data.data["128"]);
      }
    };

    fetchDetailSong();
  }, [curSongId]);

  useEffect(() => {
    
  }, [curSongId])
  

  const handleTogglePlayMusic = () => {
  };

  return (
    <div className="bg-main-400 px-5 h-full flex ">
      <div className="w-[30%] flex-auto flex gap-3  items-center">
        <img
          src={songinfo?.thumbnail}
          alt="thumbnail"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col ">
          <span className="font-semibold text-gray-700 text-sm">
            {songinfo?.title}
          </span>
          <span className="text-sm text-gray-500">
            {songinfo?.artistsNames}
          </span>
        </div>
        <div className="flex gap-4 pl-2">
          <span>
            <FaRegHeart size={16} />
          </span>
          <span>
            <BsThreeDots size={16} />
          </span>
        </div>
      </div>
      <div className="w-[40%] flex-auto border flex items-center justify-center gap-2 flex-col border-red-500 py-2">
        <div className="flex gap-8 justify-center items-center">
          <span className="cursor-pointer" title="Bật phát ngẫu nhiên">
            <CiShuffle size={24} />
          </span>
          <span className="cursor-pointer">
            <MdSkipPrevious size={24} />
          </span>
          <span
            className="p-1 border border-gray-700 cursor-pointer hover:text-main-500 rounded-full"
            onClick={handleTogglePlayMusic}
          >
            {isPlaying ? (
              <BsPauseFill size={30} />
            ) : (
              <BsFillPlayFill size={30} />
            )}
          </span>
          <span className="cursor-pointer">
            <MdSkipNext size={24} />
          </span>
          <span className="cursor-pointer" title="Bật phát lại tất cả">
            <CiRepeat size={24} />
          </span>
        </div>
        <div>progress bar</div>
      </div>
      <div className="w-[30%] flex-auto border border-red-500">Volume</div>
    </div>
  );
};

export default Player;
