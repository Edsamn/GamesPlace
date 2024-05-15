async function getAllGames() {
  try {
    const response = await api.get("/");
    const games = response.data;
    console.log(games);
  } catch (error) {
    console.log(error);
  }
}
getAllGames();
