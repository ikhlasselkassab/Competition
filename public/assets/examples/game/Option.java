package game;
public enum Option {
  ROCK,
  PAPER,
  SCISORS;

  @Override
  public String toString() {
      return switch (this) {
          case ROCK -> "Rock";
          case PAPER -> "Paper";
          case SCISORS -> "Scissors";
      };
  }
}
