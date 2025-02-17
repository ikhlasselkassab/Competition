package game;
public interface Playable{
  public void getInformation(int player_id, Option option);
  public Option play(int opponent_id);
}
