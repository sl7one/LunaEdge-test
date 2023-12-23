import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/context";
import { URL } from "../../../api/baseUrl";
import axios from "axios";
import "./modal.css";
import { CloseBtn } from "./ButtonClose";
import { MetaBlock } from "./MetaBlock";
import { IProps } from "./types";
import {  members } from "../../../constants/members";

export default function Modal({ setIsVisible }: IProps) {
  const { selectors } = useContext(GlobalContext)!;
  const [data, setData] = useState<any[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const urls = Object.values(selectors).map((value) =>
      axios.get(URL + "/" + value)
    );

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const results = await axios.all(urls);
        console.log(results.map(({ data }) => data));
        setData(results.map(({ data }) => data));
      } catch (err) {
        if (err instanceof Error) {
          setErr(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="absolute inset-0 bg-slate-100">
      <div className="absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2 width-1/2 p-4 border border-2 border-slate-500 rounded-lg bg-slate-200 min-width min-height">
        <CloseBtn setIsVisible={setIsVisible} />

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-4 gap-0.5 ">
            {data.map((player, id) => (
              <div key={player.id} className="grid grid-rows">
                <p>{members?.[id]}</p>
                <p className="font-bold uppercase">{player?.name}</p>
                <img
                  src={player.sprites?.front_default}
                  alt={player?.name}
                  onMouseEnter={(e) =>
                    (e.currentTarget.src = player.sprites?.back_default)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = player.sprites?.front_default)
                  }
                />
                <MetaBlock
                  title="Abilities: "
                  metaList={player?.abilities || []}
                  listKey="ability"
                />
                <MetaBlock
                  title="Moves: "
                  metaList={player?.moves.slice(0, 5) || []}
                  listKey="move"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
