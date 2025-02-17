package game;

public class Strategy implements Playable{
  int counter=0;
  public Strategy() {
    this.counter=0;
  }
  @Override
  public void getInformation(int player_id, Option option) {

  }
  @Override
  public Option play(int opponent_id) {
      this.counter++;
      return switch (counter % 3) {
          case 0 -> Option.ROCK;
          case 1 -> Option.PAPER;
          default -> Option.SCISORS;
      };
  }
}
