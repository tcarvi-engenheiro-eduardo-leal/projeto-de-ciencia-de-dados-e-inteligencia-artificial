# Python Environment

## PYTHON VARIABLES
### PYTHONPATH
- It has a role similar to PATH. This variable tells the Python interpreter where to locate the module files imported into a program. It should include the Python source library directory and the directories containing Python source code. PYTHONPATH is sometimes preset by the Python installer.
### PYTHONSTARTUP
- It contains the path of an initialization file containing Python source code. It is executed every time you start the interpreter. It is named as .pythonrc.py in Unix and it contains commands that load utilities or modify PYTHONPATH.
### PYTHONCASEOK
- It is used in Windows to instruct Python to find the first case-insensitive match in an import statement. Set this variable to any value to activate it.
### PYTHONHOME
- It is an alternative module search path. It is usually embedded in the PYTHONSTARTUP or PYTHONPATH directories to make switching module libraries easy.

## MAC OS SYSTEM PATHS
- /bin:
- /sbin:
- /usr/bin:
- /usr/local/bin:
- /usr/sbin:
- MAC GO PATHS
  - /usr/local/go/bin
- MAC JAVA PATHS
  - /Users/eduardosantosleal/src/apache-maven-3.8.6/bin/:
- MAC HOMEBREW PATHS
  - /opt/homebrew/bin:
  - /opt/homebrew/sbin:
- MAC HOMEBREW PYTHON PATHS
  - /opt/homebrew/opt/python@3.12/Frameworks/Python.framework/Versions/3.12/bin:
  - /opt/homebrew/opt/python@3.12/libexec/bin:

## PATHs da instalação do Python
- `/opt/homebrew/opt/python@3.12/libexec/bin`
  - idle
  - idle3
  - pip
  - pip3
  - pydoc
  - pydoc3
  - python
  - python3
  - python-config
  - python3-config
### Paths de packages instaladas por pip
- `/opt/homebrew/lib/python3.12/site-packages`
  - Comando `pip3 install <package>`:
    - _distutils_hack
    - pip
    - setuptools-68.2.2.dist-info
    - distutils-precedence.pth
    - pip-23.3.2.dist-info
    - wheel
    - pep8-1.7.1.dist-info
    - pkg_resources
    - ~ip-23.3.1.dist-info
    - pep8.py
    - setuptools
