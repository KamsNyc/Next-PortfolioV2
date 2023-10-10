'use client'

import React, { useState, useEffect } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

enum Choice {
  Rock = 'rock',
  Paper = 'paper',
  Scissors = 'scissors',
}

const GameChoices = [Choice.Rock, Choice.Paper, Choice.Scissors];
const RoundsToWin = 3;

const Comingsoon = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [userWins, setUserWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (roundsPlayed === RoundsToWin) {
      if (userWins > computerWins) {
        setResult('You won the game! 🎉 Let\'s chat over coffee!');
      } else if (computerWins > userWins) {
        setResult('Kamel won the game. Try again!');
      } else {
        setResult('It\'s a tie game. Try again!');
      }
    }
  }, [roundsPlayed, userWins, computerWins]);

  const startGame = () => {
    setGameStarted(true);
    setRoundsPlayed(0);
    setUserWins(0);
    setComputerWins(0);
    setResult(null);
  };

  const handleChoice = (choice: string) => {
    if (!loading && gameStarted) {
      const computerRandomChoice = GameChoices[Math.floor(Math.random() * GameChoices.length)];
      setUserChoice(choice);
      setComputerChoice(computerRandomChoice);

      const winConditions: Record<string, string> = {
        [Choice.Rock]: Choice.Scissors,
        [Choice.Paper]: Choice.Rock,
        [Choice.Scissors]: Choice.Paper,
      };

      if (choice === computerRandomChoice) {
        setResult("It's a tie!");
      } else if (winConditions[choice] === computerRandomChoice) {
        setResult('You win this round!');
        setUserWins(userWins + 1);
      } else {
        setResult('Computer wins this round!');
        setComputerWins(computerWins + 1);
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
            <div className="flex space-x-4">
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
      </div>
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="text-center"
          >
            <p className="text-2xl text-white mt-4">{result}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Comingsoon;
