
Agenda:

* [X] LLM
* [X] AI Agents
* [X] MCP

  * [ ] MCP architecture
  * [ ] MCP + Tools, Resources, prompts
  * [ ] Show MCP
  * [ ] Playwright MCP and JIRA MCP
  * [ ] Complete the MCP training on antropic and get the certificate
* [ ] LLM vs AI Agents vs MCP
* [ ] How they work together
* [ ] 1.LLM - Large Language ModelA model trained on huge amount of text understand prompts and generates answers great at reasoning, writing, summarization,coding but by itself, it can not directly use tools unless connected

  Think: the LLM = the brain that thinks
* [ ] AI Agents:

  * [ ] An AI Agent uses an LLM + Goals + Memory + tools
  * [ ] It can decide what step to take next
  * [ ] It can break the task into actions
  * [ ] Example: search, open browser and read file and run code
  * [ ] Think: the agent = the worker/executor
* [ ] MCP :

  * [ ] MCP = Model context protocal
  * [ ] A standard way for AI to talk to tools
  * [ ] Connects the agent/LLM to browsers, files, database, API's
  * [ ] It tells the model what tools exists and how to call them
  * [ ] Think: MCP = the USB/ bridge to tools
* [ ] How AI Agent uses MCP
* [ ] User Request(I need this done) -> AI Agent(understands goal and plans steps) -> LLM Decides(Figures out what to do next) -> MCP (connects to tools)-> Tool(example: JIRA,ADO,browser,file, database and API) -> Result back(tool returns information) -> AI Agent(Uses result complete the task) -> Final Answer(Here's the summary)

  * Example: Task - Open the Playwright docs and summarize setup steps

  * [ ] Agent understands the goal
  * [ ] LLM decides it needs a browser/search tool
  * [ ] Through MCP, it calls the browser tool
  * [ ] Tool opens docs and fetches info
  * [ ] Agent returns the summary to the user
* [ ] In short

  * [ ] LLM = thinks
  * [ ] Agent = plans + acts
  * [ ] MCP = connects to tools

  What is MCP:
* [ ] =========

* MCP is a standard way for an AI client to connect to external context and capabilites in a structured, resuable way

  * 3 core things in MCP

    * Tools ( this is MCP tools not AI Agent tools)

      * Actions the AI can call. Example: browser, playwright, database, filesystem
      * Useful because: they let the model Do things execute steps and return results
    * Prompts

      * Reusable instructions or templates
      * Example: test plan prompt, bug-report prompt,code-review prompt
      * Useful because: they guide the model, stadardize workflow and save time
    * Resources

      * Context/data the AI can read
      * Example: docs, files,schemas, logs API specs
      * Useful because: they give the model the right information before it answer or acts
    * Why MCP matters

      * one standard for may tools
      * reusable across apps and agents
      * safer, structured access
      * better context = better answers + better actions
