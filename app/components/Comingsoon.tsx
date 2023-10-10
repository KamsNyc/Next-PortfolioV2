'use client'
import React, { useState, useEffect } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

enum Choice {
  Rock = 'rock',
  Paper = 'paper',
  Scissors = 'scissors',
}

const GameChoices = [Choice.Rock, Choice.Paper, Choice.Scissors];
const RoundsToWin = 3;

const Game = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [kamelChoice, setKamelChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [userWins, setUserWins] = useState(0);
  const [kamelWins, setKamelWins] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (roundsPlayed === RoundsToWin) {
      if (userWins > kamelWins) {
        setResult('You won the game! 🎉 Let\'s chat over coffee!');
      } else if (kamelWins > userWins) {
        setResult('Kamel won the game. Try again!');
      } else {
        setResult('It\'s a tie game. Try again!');
      }
    }
  }, [roundsPlayed, userWins, kamelWins]);

  const startGame = () => {
    setGameStarted(true);
    setRoundsPlayed(0);
    setUserWins(0);
    setKamelWins(0);
    setResult(null);
  };

  const handleChoice = (choice: string) => {
    if (!loading && gameStarted) {
      const kamelRandomChoice = GameChoices[Math.floor(Math.random() * GameChoices.length)];
      setUserChoice(choice);
      setKamelChoice(kamelRandomChoice);

      const winConditions: Record<string, string> = {
        [Choice.Rock]: Choice.Scissors,
        [Choice.Paper]: Choice.Rock,
        [Choice.Scissors]: Choice.Paper,
      };

      if (choice === kamelRandomChoice) {
        setResult("It's a tie!");
      } else if (winConditions[choice] === kamelRandomChoice) {
        setResult('You win this round!');
        setUserWins(userWins + 1);
      } else {
        setResult('Kamel wins this round!');
        setKamelWins(kamelWins + 1);
      }

      setRoundsPlayed(roundsPlayed + 1);

      if (roundsPlayed === RoundsToWin) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
  };

  const replayGame = () => {
    setGameStarted(false);
    setUserChoice(null);
    setKamelChoice(null);
    setResult(null);
    setRoundsPlayed(0);
    setUserWins(0);
    setKamelWins(0);
  };

  return (
    <div className="bg-white/5 rounded-xl w-full h-[400px] flex flex-col items-center justify-center">
      <div className="mb-8 text-center">
        {!gameStarted && (
          <>
            <p className="text-lg text-gray-300 mb-2">Welcome to Rock, Paper, Scissors!</p>
            <p className="text-lg text-gray-300 mb-4">First to {RoundsToWin} wins the game.</p>
            <button
              className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md"
              onClick={startGame}
            >
              Start Game
            </button>
          </>
        )}
        {loading && <p className="text-lg text-gray-300 mb-4">Loading...</p>}
        {gameStarted && roundsPlayed < RoundsToWin && !loading && (
          <>
            <p className="text-lg text-gray-300 mb-2">Choose your weapon:</p>
            <div className="flex space-x-4 justify-center">
              <motion.button
                className={`text-3xl text-white hover:text-gray-300 transition duration-300 ${
                  userChoice === Choice.Rock ? 'text-gray-300' : ''
                }`}
                onClick={() => handleChoice(Choice.Rock)}
                whileHover={{ scale: 1.1 }}
              >
                <FaHandRock />
              </motion.button>
              <motion.button
                className={`text-3xl text-white hover:text-gray-300 transition duration-300 ${
                  userChoice === Choice.Paper ? 'text-gray-300' : ''
                }`}
                onClick={() => handleChoice(Choice.Paper)}
                whileHover={{ scale: 1.1 }}
              >
                <FaHandPaper />
              </motion.button>
              <motion.button
                className={`text-3xl text-white hover:text-gray-300 transition duration-300 ${
                  userChoice === Choice.Scissors ? 'text-gray-300' : ''
                }`}
                onClick={() => handleChoice(Choice.Scissors)}
                whileHover={{ scale: 1.1 }}
              >
                <FaHandScissors />
              </motion.button>
            </div>
          </>
        )}
        {result && (
          <>
            <p className="text-2xl text-white mt-4">{result}</p>
            {roundsPlayed === RoundsToWin && (
              <div>
                <button
                  className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md mt-4"
                  onClick={replayGame}
                >
                  Replay
                </button>

  
                  <Link target='_blank' href={'/contact'} className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-md ml-2">
                    Let's Talk
                    </Link>
              </div>
            )}
          </>
        )}
      </div>
      <AnimatePresence></AnimatePresence>
    </div>
  );
};

export default Game;
