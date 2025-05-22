import React from 'react';

const Analysis = () => (
  <section className="max-w-6xl mx-auto bg-white rounded-lg shadow p-0 mb-12">
    {/* Header Image */}
    <img
      src="https://t3.ftcdn.net/jpg/03/10/46/56/360_F_310465670_Wy4QCEfxYU2ziHjbeZsNAumKhaZzZS1w.jpg" // Update this path to your actual image
      alt="Market Analysis"
      className="w-full h-64 object-cover rounded-t-lg"
    />

    {/* Meta Info */}
    <div className="px-8 pt-6 pb-2 flex flex-wrap items-center text-sm text-gray-500 space-x-6">
      <span className="flex items-center">
        {/* Calendar Icon */}
        <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" />
          <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" />
        </svg>
        May 16, 2025
      </span>
      <span className="flex items-center">
        {/* User Icon */}
        <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" stroke="currentColor" />
          <path d="M4 20c0-4 8-4 8-4s8 0 8 4" stroke="currentColor" />
        </svg>
        By Trading Expert
      </span>
      <span className="flex items-center text-green-700 font-semibold">
        {/* Tag Icon */}
        <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M7 7h.01M3 11l8.586-8.586a2 2 0 0 1 2.828 0l6.172 6.172a2 2 0 0 1 0 2.828L13 21a2 2 0 0 1-2.828 0L3 13.828A2 2 0 0 1 3 11z" stroke="currentColor" />
        </svg>
        Market Analysis
      </span>
    </div>

    {/* Title */}
    <h1 className="px-8 pt-2 pb-1 text-2xl md:text-3xl font-bold text-green-800" style={{ fontFamily: 'serif' }}>
      The Engineering Approach to Market Analysis: A Systematic Trading Framework
    </h1>
    <div className="px-8 mb-4">
      <div className="w-32 h-1 bg-green-600 rounded mb-4"></div>
    </div>

    {/* Article Content */}
    <div className="px-8 pb-8 text-gray-800 leading-relaxed text-base md:text-lg">
      <p className="mb-4">
        The engineering approach to market analysis applies principles of systems engineering, data analysis, and algorithmic thinking to the financial markets, aiming to build a structured and repeatable trading framework. Unlike traditional discretionary trading, which often relies on subjective judgment and emotional decision-making, this approach emphasizes systematic analysis, quantitative models, and data-driven strategies. It begins with problem definition, where the trader identifies specific goals (e.g., outperforming a benchmark, managing risk exposure, or exploiting inefficiencies). This is followed by data acquisition and preprocessing, involving the collection of historical and real-time market data such as prices, volumes, and macroeconomic indicators, then cleaning and transforming it into a usable format.
      </p>
      <p className="mb-4">
        Next comes the model development phase, where predictive models are designed using statistical techniques, machine learning algorithms, or rule-based logic. These models aim to capture market patterns, trends, or anomalies and are often backtested on historical data to evaluate their predictive power and robustness. Engineers in this context focus on optimizing performance metrics like Sharpe ratio, drawdown, and hit rate, while ensuring the strategy avoids overfitting.
      </p>
      <p className="mb-4">
        The framework also includes risk management and portfolio construction, where tools like position sizing, stop-loss levels, and diversification techniques are applied to control exposure and maximize risk-adjusted returns. Importantly, the entire system is automated using programming languages (e.g., Python, R, or MATLAB) and integrated with APIs for live trading and data feeds. The system is continuously monitored, and feedback loops are implemented to retrain models or adjust parameters based on performance metrics.
      </p>
      <p>
        In summary, the engineering approach treats trading as a dynamic optimization problem within a controlled system, leveraging quantitative methods, automation, and robust testing to create consistent, scalable, and emotion-free trading strategies. This disciplined, iterative process reflects the core philosophy of engineering: build, test, refine, and optimize.
      </p>
    </div>
  </section>
);

export default Analysis;
