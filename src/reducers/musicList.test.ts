
import musicList from "./musicList";

describe("musicList reducer", () => {
  it("should return the initial state", () => {
    expect(musicList(undefined, {})).toEqual(
      {
        genreList: [],
        videoList: [],
        selectedGenres: [],
        selectedYear: [],
        inputValue: ""
      }
    );
  });
});