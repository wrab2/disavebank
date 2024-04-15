loadedSaves = [
  {
    string: 'eyJ0YWIiOiJvcHRpb25zIiwidmVyc2lvbiI6Miwib3B0aW9uc1RhYiI6InNhdmluZyIsImFjaGlldmVtZW50cyI6WzExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDMxLDMyLDMzLDM0LDM1LDM2LDM3LDM4LDQxLDQyLDQzLDQ0LDQ1LDQ2LDQ3LDQ4LDUxLDUyLDUzLDU0LDU1LDU2LDU3LDU4LDYxLDYyLDYzLDY0LDY1LDY2LDY3LDY4LDcxLDcyLDczLDc0LDc1LDc2LDc3LDc4LDgxLDgyLDgzLDg0LDg1LDg2LDg3LDg4LDkxLDkyLDkzLDk0LDk1LDk2LDk3LDk4LDEwMSwxMDIsMTAzLDEwNCwxMDUsMTA2LDEwNywxMDgsMTExLDExMiwxMTMsMTE0LDExNSwxMTYsMTE3LDExOCwxMjEsMTIyLDEyMywxMjQsMTI1LDEyNiwxMjcsMTI4LDEzMSwxMzIsMTMzLDEzNCwxMzUsMTM2LDEzNywxMzgsMTQxLDE0MiwxNDMsMTQ0LDE0NSwxNDYsMTQ3LDE0OCwxNTEsMTUyLDE1MywxNTQsMTU1LDE1NiwxNTcsMTU4LDE2MSwxNjIsMTYzLDE2NCwxNjUsMTY2LDE2NywxNjgsMTcxLDE3MiwxNzMsMTc0LDE3NSwxNzYsMTc3LDE3OCwxODEsMTgyLDE4MywxODQsMTg1LDE4NiwxODcsMTg4LDE5MSwxOTIsMTkzLDE5NCwxOTUsMTk2LDE5NywxOThdLCJzYXZlUG9zIjozLCJzYXZlSUQiOjY0NTYxMzIwNDc1NjcsIm9wdGlvbnMiOnsic2YiOjUsIm5vdCI6InNjaWVudGlmaWMiLCJ0aGVtZSI6ImRhcmsiLCJuYW1lIjoiU2F2ZSAjIiwiYXV0b1NhdmUiOnRydWUsIm5ld3N0IjpmYWxzZSwiZWxjIjpmYWxzZSwibWx0bmMiOnRydWUsIm1sdGZvcmNldGFiIjpmYWxzZSwiaGlkZU1sdEJ0biI6dHJ1ZSwic2F2ZUltcCI6Im5ldyBzYXZlIiwiaG90Ijp0cnVlLCJmZWF0UGVyYyI6ImxvZ2FyaXRobSIsInRhYnNIaWRkZW4iOltdLCJkY1B1bHNlIjpmYWxzZSwiZm9udHMiOiJ2ZXJkYW5hIiwiaGlkZUFjaCI6ZmFsc2UsInZpc1VwZCI6ImV2ZXJ5IDIgdGlja3MiLCJ0aHQiOnRydWUsImhjYyI6ZmFsc2UsIm1vZGVDb21ib1RhYmxlQWN0aXZlIjpmYWxzZX0sIm1vZGVzIjpbImFhdSIsImVhc3kiXSwidGltZSI6MTY5NDA3NTMyNjM2OCwiZGlzdGFuY2UiOiI4LjUzMjE4MDI3Njg5MjAzOWU0MzA3IiwiYmVzdERpc3RhbmNlIjoiMS4zNzE1MjQyOTMxMTgxNjU3ZTc0MjcyMiIsImJlc3RWIjoiNC43OTM4NDEzODc0OTM5NzRlNjgwNTY1IiwiYmVzdEEiOiIxLjY3MTM1NDE5MTM4NjgwMTVlNjE4NDA5IiwiYmVzdEVuZCI6IjM3IiwiYmVzdEVQIjoiMSIsImJlc3REZW1vbmljU291bHMiOnsiYXJyYXkiOlszMjIzMTQuMzIyOTcwMDM3Ml0sInNpZ24iOjF9LCJ2ZWxvY2l0eSI6IjIuNTg0NjkxMjE0MTExMDY1ZTMwOTkiLCJyYW5rIjoiMTQzIiwidGllciI6IjEyIiwicm9ja2V0cyI6IjkuMDgyOTQyMjYxMjQxMTA0ZTE4MjciLCJyZiI6IjAiLCJhdXRvbWF0aW9uIjp7InVubCI6dHJ1ZSwic2NyYXBzIjoiMS4wMzUxMDU1MDkyMzAwNDY3ZTEzMDQiLCJpbnRlbGxpZ2VuY2UiOiI1Ljg4NTkyNDAzODQwNzQwNDVlMTM1NSIsInJvYm90cyI6eyJyYW5rYm90IjpbIjMiLCIyIixmYWxzZV0sInRpZXJib3QiOlsiNCIsIjIiLGZhbHNlXX0sIm9wZW4iOiJub25lIn0sInRyIjp7InVubCI6dHJ1ZSwiYWN0aXZlIjpmYWxzZSwiY3ViZXMiOiIzLjQzMzkxNzMwOTc5ODc2OWUyMjIyIiwidXBncmFkZXMiOlsxLDIsMyw0LDUsNiw3LDgsOSwxMF19LCJjb2xsYXBzZSI6eyJ1bmwiOnRydWUsImNhZGF2ZXJzIjoiMS4wNTkwODMxMDk3NjgwNTZlMjI1IiwibGlmZUVzc2VuY2UiOiIxLjI2MDc5ODgyMzM1MTU4NDZlMjI2In0sInBhdGhvZ2VucyI6eyJ1bmwiOnRydWUsImFtb3VudCI6IjEuMjc5MjcyNDM2NTE0NDI0OGUzMyIsInVwZ3JhZGVzIjp7IjEiOiIyMSIsIjIiOiIxNyIsIjMiOiIxNyIsIjQiOiIyMCIsIjUiOiIyMSIsIjYiOiIxNiIsIjciOiIxNSIsIjgiOiIxNCIsIjkiOiIxNCIsIjEwIjoiMTQiLCIxMSI6IjAiLCIxMiI6IjAiLCIxMyI6IjAiLCIxNCI6IjAiLCIxNSI6IjAifX0sImRjIjp7InVubCI6dHJ1ZSwibWF0dGVyIjoiNzU4NTcwOTU5MjEuMjk2OTQiLCJlbmVyZ3kiOiIxMTQ2NC41NTgzOTM5MjIzODMiLCJmbHVpZCI6IjM5NzUuNTkzMzk2MTExMjY3IiwiY29yZXMiOiIyNCJ9LCJpbmYiOnsidW5sIjp0cnVlLCJiZXN0RGlzdCI6IjguNTMyMTgwMjc2ODkyMDM5ZTQzMDciLCJlbmRvcnNlbWVudHMiOiIxMCIsImtub3dsZWRnZSI6IjE5NjEzODA3NzU2NS40NTg0NyIsInVwZ3JhZGVzIjpbIjE7MSIsIjI7MSIsIjE7MiIsIjI7MiIsIjM7MSIsIjE7MyIsIjM7MiIsIjI7MyIsIjM7MyIsIjE7NCIsIjQ7MSIsIjI7NCIsIjQ7MiIsIjQ7MyIsIjM7NCIsIjQ7NCIsIjU7NCIsIjU7MiIsIjU7MSIsIjU7MyIsIjM7NSIsIjI7NSIsIjQ7NSIsIjU7NSIsIjE7NSIsIjI7NiIsIjE7NiIsIjY7MSIsIjY7MiJdLCJhc2NlbnNpb24iOnsidGltZSI6WyIwIiwiMCIsIjAiLCIwIl0sImVubGlnaHRlbm1lbnRzIjpbIjAiLCIwIiwiMCIsIjAiXSwicG93ZXIiOiIwIn0sInN0YWRpdW0iOnsiY3VycmVudCI6IiIsImNvbXBsZXRpb25zIjpbXX0sInBhbnRoZW9uIjp7ImdlbXMiOiIwIiwiYW5nZWxzIjoiMCIsImRlbW9ucyI6IjAiLCJoZWF2ZW5seUNoaXBzIjoiMCIsImRlbW9uaWNTb3VscyI6IjAiLCJoYXVudGluZ0VuZXJneSI6IjAiLCJwdXJnZSI6eyJ1bmwiOmZhbHNlLCJhY3RpdmUiOmZhbHNlLCJwb3dlciI6IjAifX0sImRlcml2YXRpdmVzIjp7InVubCI6ZmFsc2UsImFtdHMiOnt9LCJ1bmxvY2tzIjoiMCJ9fSwiYXV0b21hdG9ycyI6eyJmdXJuYWNlIjpmYWxzZSwicGF0aG9nZW5zIjp0cnVlLCJjb3JlcyI6dHJ1ZSwicm9ib3RzIjpmYWxzZSwiaW5maW5pdHlfdXBncmFkZXMiOmZhbHNlLCJlbmRvcnNlbWVudHMiOmZhbHNlLCJwZXJrcyI6ZmFsc2UsImVubGlnaHRlbm1lbnRzIjpmYWxzZSwic3BlY3RyYWxfZ2VtcyI6ZmFsc2UsImRlcml2YXRpdmVfYm9vc3RzIjpmYWxzZSwiZWxlbWVudGFyaWVzIjpmYWxzZSwicGhvdG9uX3VwZ3JhZGVzIjp0cnVlLCJnbHVvbl91cGdyYWRlcyI6dHJ1ZSwidHJlZV91cGdyYWRlcyI6dHJ1ZSwidGhlb3JpdmVyc2UiOmZhbHNlLCJ0aGVvcmV0aWNhbF9ib29zdGVycyI6ZmFsc2UsImZvYW1fdW5sb2NrcyI6ZmFsc2UsImVudHJvcHkiOmZhbHNlLCJlbnRyb3B5X3VwZ3JhZGVzIjpmYWxzZSwicGlvbl9maWVsZCI6ZmFsc2UsInNwaW5vcl9maWVsZCI6ZmFsc2UsIm11bHRpdmVyc2VfcnVucyI6ZmFsc2UsIm1hZ21hIjpmYWxzZSwicGxhc21hIjpmYWxzZX0sImF1dG9Nb2RlcyI6e30sImF1dG9UeHQiOnt9LCJlbGVtZW50YXJ5Ijp7InRpbWUiOiI3ODkuNTI0NTQyODQ5NDg4NCIsInRpbWVzIjoiMSIsInBhcnRpY2xlcyI6IjAiLCJmZXJtaW9ucyI6eyJhbW91bnQiOiIxIiwicXVhcmtzIjp7ImFtb3VudCI6IjU0OTMuNzYwODIwOTk0NTc2NSIsInR5cGUiOjN9LCJsZXB0b25zIjp7ImFtb3VudCI6IjEyNjAuNTk3NjY4NTU5MTgyNSIsInR5cGUiOjJ9fSwiYm9zb25zIjp7ImFtb3VudCI6IjAiLCJnYXVnZSI6eyJhbW91bnQiOiIwIiwiZm9yY2UiOiIwIiwicGhvdG9ucyI6eyJhbW91bnQiOiIwIiwidXBncmFkZXMiOlsiMCIsIjAiLCIwIiwiMCJdfSwidyI6IjAiLCJ6IjoiMCIsImdsdW9ucyI6eyJyIjp7ImFtb3VudCI6IjAiLCJ1cGdyYWRlcyI6WyIwIiwiMCIsIjAiXX0sImciOnsiYW1vdW50IjoiMCIsInVwZ3JhZGVzIjpbIjAiLCIwIiwiMCJdfSwiYiI6eyJhbW91bnQiOiIwIiwidXBncmFkZXMiOlsiMCIsIjAiLCIwIl19LCJhciI6eyJhbW91bnQiOiIwIiwidXBncmFkZXMiOlsiMCIsIjAiLCIwIl19LCJhZyI6eyJhbW91bnQiOiIwIiwidXBncmFkZXMiOlsiMCIsIjAiLCIwIl19LCJhYiI6eyJhbW91bnQiOiIwIiwidXBncmFkZXMiOlsiMCIsIjAiLCIwIl19fSwiZ3Jhdml0b25zIjoiMCJ9LCJzY2FsYXIiOnsiYW1vdW50IjoiMCIsImhpZ2dzIjp7ImFtb3VudCI6IjAiLCJ1cGdyYWRlcyI6W119fX0sInRoZW9yeSI6eyJ1bmwiOmZhbHNlLCJhY3RpdmUiOmZhbHNlLCJwb2ludHMiOiIwIiwiZGVwdGgiOiIwIiwiYmVzdERlcHRoIjoiMCIsInN1cGVyc3ltbWV0cnkiOnsidW5sIjpmYWxzZSwic3F1YXJrcyI6IjAiLCJzbGVwdG9ucyI6IjAiLCJuZXV0cmFsaW5vcyI6IjAiLCJjaGFyZ2lub3MiOiIwIn0sInRyZWUiOnsidW5sIjpmYWxzZSwic3BlbnQiOiIwIiwidXBncmFkZXMiOnt9fSwic3RyaW5ncyI6eyJ1bmwiOmZhbHNlLCJhbW91bnRzIjpbIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiXSwiZW50YW5nbGVkIjoiNzguOTUyNDU0Mjg0OTQ4OTEifSwicHJlb25zIjp7InVubCI6ZmFsc2UsImFtb3VudCI6IjAiLCJib29zdGVycyI6IjAifSwiYWNjZWxlcm9ucyI6eyJ1bmwiOmZhbHNlLCJhbW91bnQiOiIwIiwiZXhwYW5kZXJzIjoiMCJ9LCJpbmZsYXRvbnMiOnsidW5sIjpmYWxzZSwiYW1vdW50IjoiMCJ9fSwiaGMiOnsidW5sIjpmYWxzZSwiYWN0aXZlIjpmYWxzZSwiYmVzdCI6IjAiLCJoYWRyb25zIjoiMCIsImNsYWltZWQiOiIwIiwic2VsZWN0b3JzIjp7ImdvYWwiOnsiYXJyYXkiOlszMDguMjU0NzE1NTU5OTE2NzUsMV0sInNpZ24iOjF9LCJnb2FsTWx0IjpmYWxzZSwicm9ja2V0cyI6ZmFsc2UsInJmIjpmYWxzZSwibm9UUlUiOmZhbHNlLCJub0NhZCI6ZmFsc2UsIm5vUFUiOmZhbHNlLCJub0RDIjpmYWxzZSwibm9JVSI6ZmFsc2UsInNwYWNlb24iOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sInNvbGFyaXMiOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sImluZmluaXR5Ijp7ImFycmF5IjpbMF0sInNpZ24iOjF9LCJldGVybml0eSI6eyJhcnJheSI6WzBdLCJzaWduIjoxfSwicmVhbGl0eSI6eyJhcnJheSI6WzBdLCJzaWduIjoxfSwiZHJpZ2dhbml6Ijp7ImFycmF5IjpbMF0sInNpZ24iOjF9LCJmbGFtaXMiOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sImNyYW5pdXMiOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sInNwZWN0cmEiOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sImFxdWFsb24iOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sIm51bGx1bSI6eyJhcnJheSI6WzBdLCJzaWduIjoxfSwicXVhbnRyb24iOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sIm5vR2VtcyI6ZmFsc2UsInB1cmdlIjpmYWxzZSwibm9EUyI6ZmFsc2UsIm5vREIiOmZhbHNlLCJlbG0iOmZhbHNlLCJmZXJtYm9zIjpmYWxzZSwidHYiOnsiYXJyYXkiOlsxXSwic2lnbiI6LTF9LCJzcHJzeW0iOmZhbHNlLCJ0cmVlIjpmYWxzZSwic3RyaW5nIjp7ImFycmF5IjpbMF0sInNpZ24iOjF9LCJwcmVvbnRiIjpmYWxzZSwiYWNscm9uIjpmYWxzZSwiZGUiOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sImluZmwiOmZhbHNlLCJyZnJtIjp7ImFycmF5IjpbMF0sInNpZ24iOjF9LCJldHJweSI6ZmFsc2UsInNreSI6ZmFsc2UsInExIjpmYWxzZSwicTIiOmZhbHNlLCJxMyI6ZmFsc2UsIm1sdDEiOmZhbHNlLCJtbHQyIjpmYWxzZSwibWx0MyI6ZmFsc2UsIm1sdDQiOmZhbHNlLCJtbHQ1IjpmYWxzZX19LCJmb2FtIjp7InVubCI6ZmFsc2UsImFtb3VudHMiOlsiMCIsIjAiLCIwIiwiMCIsIjAiXSwibWF4RGVwdGgiOiIxIiwidXBncmFkZXMiOlsiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIl0sImF1dG9VbmwiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19LCJlbnRyb3B5Ijp7InVubCI6ZmFsc2UsImJlc3REZXB0aCI6IjEiLCJhbW91bnQiOiIwIiwiYmVzdCI6IjAiLCJ1cGdyYWRlcyI6W119LCJza3kiOnsidW5sIjpmYWxzZSwiYW1vdW50IjoiMCIsInBpb25zIjp7ImFtb3VudCI6IjAiLCJmaWVsZCI6e319LCJzcGlub3JzIjp7ImFtb3VudCI6IjAiLCJmaWVsZCI6e319fX0sIm1sdCI6eyJ0aW1lcyI6IjAiLCJlbmVyZ3kiOiIwIiwiYmVzdEVuZXJneSI6IjAiLCJ0b3RhbEVuZXJneSI6IjAiLCJoaWdoZXN0Q29tcGxldGVkIjowLCJoaWdoZXN0VW5sb2NrZWQiOjAsImFjdGl2ZSI6MCwicXVpbHRVcGdzIjpbIjAiLCIwIiwiMCJdLCJtbHQxc2VsZWN0ZWQiOltdLCJtbHQzc2VsZWN0ZWQiOltdfX0',
    name: 'Elementary',
    group: 'elementary',
    author:  'Wrab',
  },
	{
    string: 'eyJ0YWIiOiJvcHRpb25zIiwidmVyc2lvbiI6Miwib3B0aW9uc1RhYiI6InNhdmluZyIsImFjaGlldmVtZW50cyI6WzExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDMxLDMyLDMzLDM0LDM1LDM2LDM3LDM4LDQxLDQyLDQzLDQ0LDQ1LDQ2LDQ3LDQ4LDUxLDUyLDUzLDU0LDU1LDU2LDU3LDU4LDYxLDYyLDYzLDY0LDY1LDY2LDY3LDY4LDcxLDcyLDczLDc0LDc1LDc2LDc3LDc4LDgxLDgyLDgzLDg0LDg1LDg2LDg3LDg4LDkxLDkyLDkzLDk0LDk1LDk2LDk3LDk4LDEwMSwxMDIsMTAzLDEwNCwxMDUsMTA2LDEwNywxMDgsMTExLDExMiwxMTMsMTE0LDExNSwxMTYsMTE3LDExOCwxMjEsMTIyLDEyMywxMjQsMTI1LDEyNiwxMjcsMTI4LDEzMSwxMzIsMTMzLDEzNCwxMzUsMTM2LDEzNywxMzgsMTQxLDE0MiwxNDMsMTQ0LDE0NSwxNDYsMTQ3LDE0OCwxNTEsMTUyLDE1MywxNTQsMTU1LDE1NiwxNTcsMTU4LDE2MSwxNjIsMTYzLDE2NCwxNjUsMTY2LDE2NywxNjgsMTcxLDE3MiwxNzMsMTc0LDE3NSwxNzYsMTc3LDE3OCwxODEsMTgyLDE4MywxODQsMTg1LDE4NiwxODcsMTg4LDE5MSwxOTIsMTkzLDE5NCwxOTUsMTk2LDE5NywxOThdLCJzYXZlUG9zIjoxLCJzYXZlSUQiOjY0NTYxMzIwNDc1NjcsIm9wdGlvbnMiOnsic2YiOjUsIm5vdCI6InNjaWVudGlmaWMiLCJ0aGVtZSI6ImRhcmsiLCJuYW1lIjoiU2F2ZSAjIiwiYXV0b1NhdmUiOnRydWUsIm5ld3N0IjpmYWxzZSwiZWxjIjpmYWxzZSwibWx0bmMiOnRydWUsIm1sdGZvcmNldGFiIjpmYWxzZSwiaGlkZU1sdEJ0biI6dHJ1ZSwic2F2ZUltcCI6Im5ldyBzYXZlIiwiaG90Ijp0cnVlLCJmZWF0UGVyYyI6ImxvZ2FyaXRobSIsInRhYnNIaWRkZW4iOltdLCJkY1B1bHNlIjpmYWxzZSwiZm9udHMiOiJ2ZXJkYW5hIiwiaGlkZUFjaCI6ZmFsc2UsInZpc1VwZCI6ImV2ZXJ5IDIgdGlja3MiLCJ0aHQiOnRydWUsImhjYyI6ZmFsc2UsIm1vZGVDb21ib1RhYmxlQWN0aXZlIjp0cnVlfSwibW9kZXMiOlsiYWF1IiwiZWFzeSJdLCJ0aW1lIjoxNzA4ODg0NjkzODQ4LCJkaXN0YW5jZSI6IjIuMzEyODg2NzE3ODU0NDg2ZTgxOTA4MzYiLCJiZXN0RGlzdGFuY2UiOiI0LjgwMTU4NDkxNTcxNzcwNmU5MDUwODc0IiwiYmVzdFYiOiIxLjUwNDk5MjEwODE5MzEzMDFlODUyNjQyNCIsImJlc3RBIjoiNC43MTcxOTUwMTA4NjQxNjllODAwMTk3MyIsImJlc3RFbmQiOiI0NSIsImJlc3RFUCI6IjExMDkiLCJiZXN0RGVtb25pY1NvdWxzIjp7ImFycmF5IjpbMzY5NTk4ODM0LjQxNDQ0OV0sInNpZ24iOjF9LCJ2ZWxvY2l0eSI6IjIuNDk4ODM0NDk2NzM1NDE5NWU3NzA5MzQzIiwicmFuayI6Ijg3OCIsInRpZXIiOiI0MSIsInJvY2tldHMiOiI0LjIxOTM0NDM3NTkyNDY1MmU1MTg0ODE3IiwicmYiOiIzMDciLCJhdXRvbWF0aW9uIjp7InVubCI6dHJ1ZSwic2NyYXBzIjoiNy41NTUxMjIzMzAzMjQ0NTVlNTMyMTAxIiwiaW50ZWxsaWdlbmNlIjoiOS4xNTMyMTA2MTU1MDQxMDhlNTMyMzc1Iiwicm9ib3RzIjp7InJhbmtib3QiOlsiNjI5NzgxIiwiMTA1NiIsZmFsc2VdLCJ0aWVyYm90IjpbIjU4OTQyMyIsIjk0MCIsZmFsc2VdLCJmdWVsYm90IjpbIjQ1MjY2MiIsIjcwMiIsZmFsc2VdfSwib3BlbiI6Im5vbmUifSwidHIiOnsidW5sIjp0cnVlLCJhY3RpdmUiOmZhbHNlLCJjdWJlcyI6IjIuNzQwMjEzNjc4Mzc4ODA2M2UxMjIyNTAwIiwidXBncmFkZXMiOlsyLDcsNiwxLDMsOCw5LDQsNSwxMCwxMiwxMSwxMywxNSwxNF19LCJjb2xsYXBzZSI6eyJ1bmwiOnRydWUsImNhZGF2ZXJzIjoiNC4xNjM5NDkxODAzMTI5MjllNDExNDcxIiwibGlmZUVzc2VuY2UiOiIyLjQ1Nzg1NTM2MDE1MjE0MmUzMjM3MjA1In0sInBhdGhvZ2VucyI6eyJ1bmwiOnRydWUsImFtb3VudCI6IjMuNDE4MjU0NjIyOTAzODJlNTA2IiwidXBncmFkZXMiOnsiMSI6IjcwIiwiMiI6IjY0IiwiMyI6IjY0IiwiNCI6IjY5IiwiNSI6IjcwIiwiNiI6IjYzIiwiNyI6IjU5IiwiOCI6IjU4IiwiOSI6IjU3IiwiMTAiOiI1NiIsIjExIjoiNDUiLCIxMiI6IjUwIiwiMTMiOiI2MiIsIjE0IjoiNDUiLCIxNSI6IjI1In19LCJkYyI6eyJ1bmwiOnRydWUsIm1hdHRlciI6IjQuNDcyOTY1NjAxNDg5NzUyZTcxMCIsImVuZXJneSI6IjcuNDY5NDk4ODQzMzg1MjQ1ZTY5NyIsImZsdWlkIjoiMi42NDg0MTUxMDQzNzYzM2U2OTQiLCJjb3JlcyI6IjU3In0sImluZiI6eyJ1bmwiOnRydWUsImJlc3REaXN0IjoiMi4zMTI4ODY3MTc4NTQ0ODZlODE5MDgzNiIsImVuZG9yc2VtZW50cyI6IjQ1Iiwia25vd2xlZGdlIjoiOS4xMDMxNzI5NjY1NDA0MzRlMTk5IiwidXBncmFkZXMiOlsiMTsxIiwiMTsyIiwiMTszIiwiMjsxIiwiMjsyIiwiMjszIiwiMzsxIiwiMzsyIiwiMzszIiwiNDsxIiwiNDsyIiwiNDszIiwiNDs0IiwiMTs0IiwiMTs1IiwiMjs0IiwiMzs0IiwiNTsxIiwiNTszIiwiMjs1IiwiMzs1IiwiNDs1IiwiNTsyIiwiNTs0IiwiNTs1IiwiMTs2IiwiMjs2IiwiNjsxIiwiMzs2IiwiNDs2IiwiNjsyIiwiNjszIiwiNTs2IiwiNjs0IiwiNjs1IiwiNjs2IiwiNzsxIiwiNzsyIiwiNzszIiwiNzs0IiwiMTs3IiwiNzs1IiwiNzs2IiwiMjs3IiwiMzs3IiwiNDs3IiwiNTs3IiwiNjs3IiwiNzs3IiwiMTs4IiwiMjs4IiwiMzs4IiwiNDs4IiwiNTs4IiwiNjs4IiwiNzs4IiwiODsxIiwiODsyIiwiODszIiwiODs0IiwiODs1IiwiODs2IiwiODs3IiwiODs4IiwiOTsxIiwiOTsyIiwiOTszIiwiOTs0IiwiOTs1IiwiOTs2IiwiOTs3IiwiOTs4IiwiMTs5IiwiMjs5IiwiMzs5IiwiNDs5IiwiNTs5IiwiNjs5IiwiNzs5IiwiODs5IiwiOTs5IiwiMTsxMCIsIjEwOzEiLCIyOzEwIiwiMzsxMCIsIjEwOzIiLCIxMDszIiwiMTA7NCIsIjQ7MTAiLCI1OzEwIiwiNjsxMCIsIjc7MTAiLCI4OzEwIiwiOTsxMCIsIjEwOzUiLCIxMDs2IiwiMTA7NyIsIjEwOzgiLCIxMDs5IiwiMTA7MTAiXSwiYXNjZW5zaW9uIjp7InRpbWUiOlsiMjIuMzcxMDAwMDAwMDAwMDEzIiwiMjIuMzcxMDAwMDAwMDAwMDEzIiwiMjIuMzcxMDAwMDAwMDAwMDEzIiwiMjIuMzcxMDAwMDAwMDAwMDEzIl0sImVubGlnaHRlbm1lbnRzIjpbIjciLCI3IiwiNyIsIjciXSwicG93ZXIiOiIxMDAzNDUzNjIyNDcuMTUzMSJ9LCJzdGFkaXVtIjp7ImN1cnJlbnQiOiIiLCJjb21wbGV0aW9ucyI6WyJldGVybml0eSIsImRyaWdnYW5peiIsInNwYWNlb24iLCJpbmZpbml0eSIsInNvbGFyaXMiLCJyZWFsaXR5Il19LCJwYW50aGVvbiI6eyJnZW1zIjoiMCIsImFuZ2VscyI6IjMiLCJkZW1vbnMiOiIzIiwiaGVhdmVubHlDaGlwcyI6IjI2OTg5NTIuMjU5NzA3NDE0NSIsImRlbW9uaWNTb3VscyI6IjgzNTI0NzkuNTMwODg0NTY4IiwiaGF1bnRpbmdFbmVyZ3kiOiIwIiwicHVyZ2UiOnsidW5sIjp0cnVlLCJhY3RpdmUiOmZhbHNlLCJwb3dlciI6IjI5MDYifX0sImRlcml2YXRpdmVzIjp7InVubCI6dHJ1ZSwiYW10cyI6eyJhY2NlbGVyYXRpb24iOiI4LjMzODU4OTMyMTMwMjM4M2UyMDQxNDcwIiwiamVyayI6IjcuNjI0MDMzOTY3OTA2MjA4ZTEyMDA1NTMiLCJzbmFwIjoiNi40MzQ1ODEzMTE0Njc0NDVlMzU5NTY1In0sInVubG9ja3MiOiI4In19LCJhdXRvbWF0b3JzIjp7ImZ1cm5hY2UiOmZhbHNlLCJwYXRob2dlbnMiOnRydWUsImNvcmVzIjp0cnVlLCJyb2JvdHMiOnRydWUsImluZmluaXR5X3VwZ3JhZGVzIjp0cnVlLCJlbmRvcnNlbWVudHMiOnRydWUsInBlcmtzIjp0cnVlLCJlbmxpZ2h0ZW5tZW50cyI6dHJ1ZSwic3BlY3RyYWxfZ2VtcyI6dHJ1ZSwiZGVyaXZhdGl2ZV9ib29zdHMiOnRydWUsImVsZW1lbnRhcmllcyI6ZmFsc2UsInBob3Rvbl91cGdyYWRlcyI6dHJ1ZSwiZ2x1b25fdXBncmFkZXMiOnRydWUsInRyZWVfdXBncmFkZXMiOnRydWUsInRoZW9yaXZlcnNlIjpmYWxzZSwidGhlb3JldGljYWxfYm9vc3RlcnMiOmZhbHNlLCJmb2FtX3VubG9ja3MiOmZhbHNlLCJlbnRyb3B5IjpmYWxzZSwiZW50cm9weV91cGdyYWRlcyI6ZmFsc2UsInBpb25fZmllbGQiOmZhbHNlLCJzcGlub3JfZmllbGQiOmZhbHNlLCJtdWx0aXZlcnNlX3J1bnMiOmZhbHNlLCJtYWdtYSI6ZmFsc2UsInBsYXNtYSI6ZmFsc2V9LCJhdXRvTW9kZXMiOnsiZWxlbWVudGFyaWVzIjoiQU1PVU5UIiwibXVsdGl2ZXJzZV9ydW5zIjoiQU1PVU5UIn0sImF1dG9UeHQiOnsiZWxlbWVudGFyaWVzIjoiMCIsIm11bHRpdmVyc2VfcnVucyI6IjAifSwiZWxlbWVudGFyeSI6eyJ0aW1lIjoiNy42Nzg5OTk5OTk5OTk5OTciLCJ0aW1lcyI6IjE1MyIsInBhcnRpY2xlcyI6IjExMDkiLCJmZXJtaW9ucyI6eyJhbW91bnQiOiIyNjM1IiwicXVhcmtzIjp7ImFtb3VudCI6IjE0MTE1NDA2ODUuMTA4OTA0NCIsInR5cGUiOjN9LCJsZXB0b25zIjp7ImFtb3VudCI6IjUyODYxNDU1OC4xNjU3ODg2NSIsInR5cGUiOjJ9fSwiYm9zb25zIjp7ImFtb3VudCI6IjI4MjAiLCJnYXVnZSI6eyJhbW91bnQiOiIyMDcwOTMuMzE2Mzg5NTQzOCIsImZvcmNlIjoiMTAwMDExLjM2OTEwNTU3MzE4IiwicGhvdG9ucyI6eyJhbW91bnQiOiIyNjguNDg3NDE5NzA2MzA5MTQiLCJ1cGdyYWRlcyI6WyIyIiwiMiIsIjAiLCIwIl19LCJ3IjoiMTIxLjM1NjQ1MzQ4Nzc2NzcyIiwieiI6IjY5Ljg1NzA1MjY3NzI3ODQ3IiwiZ2x1b25zIjp7InIiOnsiYW1vdW50IjoiNDI5LjU3OTg3MTUzMDA5NDQ3IiwidXBncmFkZXMiOlsiMiIsIjIiLCIwIl19LCJnIjp7ImFtb3VudCI6IjQxMy4wNTc1Njg3Nzg5MzY5NyIsInVwZ3JhZGVzIjpbIjIiLCIxIiwiMCJdfSwiYiI6eyJhbW91bnQiOiI0NDcuNDc5MDMyODQzODQ4MzYiLCJ1cGdyYWRlcyI6WyIyIiwiMiIsIjAiXX0sImFyIjp7ImFtb3VudCI6IjEwNy4zOTQ5Njc4ODI1MjM2MiIsInVwZ3JhZGVzIjpbIjIiLCIxIiwiMCJdfSwiYWciOnsiYW1vdW50IjoiMTA5LjU4NjcwMTkyMDk0MjQ2IiwidXBncmFkZXMiOlsiMiIsIjEiLCIwIl19LCJhYiI6eyJhbW91bnQiOiIxMDUuMjg5MTg0MTk4NTUyNTkiLCJ1cGdyYWRlcyI6WyIyIiwiMSIsIjAiXX19LCJncmF2aXRvbnMiOiIxMzg1Mi44ODEzNjUzNDM4NzYifSwic2NhbGFyIjp7ImFtb3VudCI6IjI0NC42Njk4NTkyNDU0NzQwNCIsImhpZ2dzIjp7ImFtb3VudCI6IjkwNzE3MDU4NjU3MC44NzQ4IiwidXBncmFkZXMiOlsiMDswOzAiLCIwOzA7MSIsIjA7MTsxIiwiMDsxOzAiLCIxOzA7MCIsIjE7MDsxIiwiMjswOzAiLCIwOzI7MCIsIjA7MDsyIiwiMTsxOzAiLCIzOzA7MCIsIjA7MDszIiwiMTsyOzAiLCIwOzI7MSIsIjQ7MDswIiwiMDswOzQiLCIxOzM7MCIsIjA7MzsxIl19fX0sInRoZW9yeSI6eyJ1bmwiOnRydWUsImFjdGl2ZSI6ZmFsc2UsInBvaW50cyI6IjAiLCJkZXB0aCI6IjAiLCJiZXN0RGVwdGgiOiIwIiwic3VwZXJzeW1tZXRyeSI6eyJ1bmwiOmZhbHNlLCJzcXVhcmtzIjoiMCIsInNsZXB0b25zIjoiMCIsIm5ldXRyYWxpbm9zIjoiMCIsImNoYXJnaW5vcyI6IjAifSwidHJlZSI6eyJ1bmwiOmZhbHNlLCJzcGVudCI6IjAiLCJ1cGdyYWRlcyI6e319LCJzdHJpbmdzIjp7InVubCI6ZmFsc2UsImFtb3VudHMiOlsiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCJdLCJlbnRhbmdsZWQiOiIyODkuNjI3ODU0Mjg0ODU3MiJ9LCJwcmVvbnMiOnsidW5sIjpmYWxzZSwiYW1vdW50IjoiMCIsImJvb3N0ZXJzIjoiMCJ9LCJhY2NlbGVyb25zIjp7InVubCI6ZmFsc2UsImFtb3VudCI6IjAiLCJleHBhbmRlcnMiOiIwIn0sImluZmxhdG9ucyI6eyJ1bmwiOmZhbHNlLCJhbW91bnQiOiIwIn19LCJoYyI6eyJ1bmwiOmZhbHNlLCJhY3RpdmUiOmZhbHNlLCJiZXN0IjoiMCIsImhhZHJvbnMiOiIwIiwiY2xhaW1lZCI6IjAiLCJzZWxlY3RvcnMiOnsiZ29hbCI6eyJhcnJheSI6WzMwOC4yNTQ3MTU1NTk5MTY3NSwxXSwic2lnbiI6MX0sImdvYWxNbHQiOmZhbHNlLCJyb2NrZXRzIjpmYWxzZSwicmYiOmZhbHNlLCJub1RSVSI6ZmFsc2UsIm5vQ2FkIjpmYWxzZSwibm9QVSI6ZmFsc2UsIm5vREMiOmZhbHNlLCJub0lVIjpmYWxzZSwic3BhY2VvbiI6eyJhcnJheSI6WzBdLCJzaWduIjoxfSwic29sYXJpcyI6eyJhcnJheSI6WzBdLCJzaWduIjoxfSwiaW5maW5pdHkiOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sImV0ZXJuaXR5Ijp7ImFycmF5IjpbMF0sInNpZ24iOjF9LCJyZWFsaXR5Ijp7ImFycmF5IjpbMF0sInNpZ24iOjF9LCJkcmlnZ2FuaXoiOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sImZsYW1pcyI6eyJhcnJheSI6WzBdLCJzaWduIjoxfSwiY3Jhbml1cyI6eyJhcnJheSI6WzBdLCJzaWduIjoxfSwic3BlY3RyYSI6eyJhcnJheSI6WzBdLCJzaWduIjoxfSwiYXF1YWxvbiI6eyJhcnJheSI6WzBdLCJzaWduIjoxfSwibnVsbHVtIjp7ImFycmF5IjpbMF0sInNpZ24iOjF9LCJxdWFudHJvbiI6eyJhcnJheSI6WzBdLCJzaWduIjoxfSwibm9HZW1zIjpmYWxzZSwicHVyZ2UiOmZhbHNlLCJub0RTIjpmYWxzZSwibm9EQiI6ZmFsc2UsImVsbSI6ZmFsc2UsImZlcm1ib3MiOmZhbHNlLCJ0diI6eyJhcnJheSI6WzFdLCJzaWduIjotMX0sInNwcnN5bSI6ZmFsc2UsInRyZWUiOmZhbHNlLCJzdHJpbmciOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sInByZW9udGIiOmZhbHNlLCJhY2xyb24iOmZhbHNlLCJkZSI6eyJhcnJheSI6WzBdLCJzaWduIjoxfSwiaW5mbCI6ZmFsc2UsInJmcm0iOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sImV0cnB5IjpmYWxzZSwic2t5IjpmYWxzZSwicTEiOmZhbHNlLCJxMiI6ZmFsc2UsInEzIjpmYWxzZSwibWx0MSI6ZmFsc2UsIm1sdDIiOmZhbHNlLCJtbHQzIjpmYWxzZSwibWx0NCI6ZmFsc2UsIm1sdDUiOmZhbHNlfX0sImZvYW0iOnsidW5sIjpmYWxzZSwiYW1vdW50cyI6WyIwIiwiMCIsIjAiLCIwIiwiMCJdLCJtYXhEZXB0aCI6IjEiLCJ1cGdyYWRlcyI6WyIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiXSwiYXV0b1VubCI6W2ZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlXX0sImVudHJvcHkiOnsidW5sIjpmYWxzZSwiYmVzdERlcHRoIjoiMSIsImFtb3VudCI6IjAiLCJiZXN0IjoiMCIsInVwZ3JhZGVzIjpbXX0sInNreSI6eyJ1bmwiOmZhbHNlLCJhbW91bnQiOiIwIiwicGlvbnMiOnsiYW1vdW50IjoiMCIsImZpZWxkIjp7fX0sInNwaW5vcnMiOnsiYW1vdW50IjoiMCIsImZpZWxkIjp7fX19fSwibWx0Ijp7InRpbWVzIjoiMCIsImVuZXJneSI6IjAiLCJiZXN0RW5lcmd5IjoiMCIsInRvdGFsRW5lcmd5IjoiMCIsImhpZ2hlc3RDb21wbGV0ZWQiOjAsImhpZ2hlc3RVbmxvY2tlZCI6MCwiYWN0aXZlIjowLCJxdWlsdFVwZ3MiOlsiMCIsIjAiLCIwIl0sIm1sdDFzZWxlY3RlZCI6W10sIm1sdDNzZWxlY3RlZCI6W119fQ==',
    name: 'Theories',
    group: 'elementary',
    author:  'Wrab',
  },
	{
    string: 'eyJ0YWIiOiJvcHRpb25zIiwidmVyc2lvbiI6Miwib3B0aW9uc1RhYiI6InNhdmluZyIsImFjaGlldmVtZW50cyI6WzExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDMxLDMyLDMzLDM0LDM1LDM2LDM3LDM4LDQxLDQyLDQzLDQ0LDQ1LDQ2LDQ3LDQ4LDUxLDUyLDUzLDU0LDU1LDU2LDU3LDU4LDYxLDYyLDYzLDY0LDY1LDY2LDY3LDY4LDcxLDcyLDczLDc0LDc1LDc2LDc3LDc4LDgxLDgyLDgzLDg0LDg1LDg2LDg3LDg4LDkxLDkyLDkzLDk0LDk1LDk2LDk3LDk4LDEwMSwxMDIsMTAzLDEwNCwxMDUsMTA2LDEwNywxMDgsMTExLDExMiwxMTMsMTE0LDExNSwxMTYsMTE3LDExOCwxMjEsMTIyLDEyMywxMjQsMTI1LDEyNiwxMjcsMTI4LDEzMSwxMzIsMTMzLDEzNCwxMzUsMTM2LDEzNywxMzgsMTQxLDE0MiwxNDMsMTQ0LDE0NSwxNDYsMTQ3LDE0OCwxNTEsMTUyLDE1MywxNTQsMTU1LDE1NiwxNTcsMTU4LDE2MSwxNjIsMTYzLDE2NCwxNjUsMTY2LDE2NywxNjgsMTcxLDE3MiwxNzMsMTc0LDE3NSwxNzYsMTc3LDE3OCwxODEsMTgyLDE4MywxODQsMTg1LDE4NiwxODcsMTg4LDE5MSwxOTIsMTkzLDE5NCwxOTUsMTk2LDE5NywxOThdLCJzYXZlUG9zIjoxLCJzYXZlSUQiOjY0NTYxMzIwNDc1NjcsIm9wdGlvbnMiOnsic2YiOjUsIm5vdCI6InNjaWVudGlmaWMiLCJ0aGVtZSI6ImRhcmsiLCJuYW1lIjoiU2F2ZSAjIiwiYXV0b1NhdmUiOnRydWUsIm5ld3N0IjpmYWxzZSwiZWxjIjpmYWxzZSwibWx0bmMiOnRydWUsIm1sdGZvcmNldGFiIjpmYWxzZSwiaGlkZU1sdEJ0biI6dHJ1ZSwic2F2ZUltcCI6Im5ldyBzYXZlIiwiaG90Ijp0cnVlLCJmZWF0UGVyYyI6ImxvZ2FyaXRobSIsInRhYnNIaWRkZW4iOltdLCJkY1B1bHNlIjpmYWxzZSwiZm9udHMiOiJ2ZXJkYW5hIiwiaGlkZUFjaCI6ZmFsc2UsInZpc1VwZCI6ImV2ZXJ5IDIgdGlja3MiLCJ0aHQiOnRydWUsImhjYyI6ZmFsc2UsIm1vZGVDb21ib1RhYmxlQWN0aXZlIjp0cnVlfSwibW9kZXMiOlsiYWF1IiwiZWFzeSJdLCJ0aW1lIjoxNzA4ODg3MzcxODY3LCJkaXN0YW5jZSI6IjUuOTYyMDU1MzYwMTQ5NDg3ZTM0NDQ1Nzk0IiwiYmVzdERpc3RhbmNlIjoiNS45NjIwNTUzNjAxNDk0ODdlMzQ0NDU3OTQiLCJiZXN0ViI6IjIuNDE0MTA0MjMwNzE4MzkzZTMyNjc3NDY5IiwiYmVzdEEiOiI5Ljc3NDk4MzQzMjI2Nzc2NGUzMDkwOTE0MyIsImJlc3RFbmQiOiI2NSIsImJlc3RFUCI6IjcwNTk5MSIsImJlc3REZW1vbmljU291bHMiOnsiYXJyYXkiOlszMS4wNzQxMDY3MDcxNjI0OTMsMV0sInNpZ24iOjF9LCJ2ZWxvY2l0eSI6IjIuNDE0MTA0MjMwNzE4MzkzZTMyNjc3NDY5IiwicmFuayI6IjkxOCIsInRpZXIiOiI0MiIsInJvY2tldHMiOiI2LjczODY0NzIxMDY5MzE5NGUyNjI2ODc2NiIsInJmIjoiMzE0IiwiYXV0b21hdGlvbiI6eyJ1bmwiOnRydWUsInNjcmFwcyI6IjEuMTMyNDkyMzg5MDU0Njk2N2UxOTIxOTQ2IiwiaW50ZWxsaWdlbmNlIjoiMS4zNDE4NDIxOTU0ODQ2ODI2ZTE5MjIyMzIiLCJyb2JvdHMiOnsicmFua2JvdCI6WyIyMjc0NTY3IiwiMjAwNyIsZmFsc2VdLCJ0aWVyYm90IjpbIjIxMjgxODAiLCIxNzg2IixmYWxzZV0sImZ1ZWxib3QiOlsiMTYzNDI5NiIsIjEzMzQiLGZhbHNlXX0sIm9wZW4iOiJub25lIn0sInRyIjp7InVubCI6dHJ1ZSwiYWN0aXZlIjpmYWxzZSwiY3ViZXMiOiIzLjY2MDcwMDY4NDQ4MTczNzRlMzcxMTEzMSIsInVwZ3JhZGVzIjpbMiw3LDYsMSwzLDgsOSw0LDUsMTAsMTIsMTEsMTMsMTUsMTRdfSwiY29sbGFwc2UiOnsidW5sIjp0cnVlLCJjYWRhdmVycyI6IjYuMzY3NzM5NTEzMjU3OTZlMjA5ODU3MSIsImxpZmVFc3NlbmNlIjoiMS40MTM2ODQ5MTM0MTg2ODI5ZTE4Njg3MzM0In0sInBhdGhvZ2VucyI6eyJ1bmwiOnRydWUsImFtb3VudCI6IjMuMjk4NjkyODQ5NTI1NzU0NmU2MzgiLCJ1cGdyYWRlcyI6eyIxIjoiNzIiLCIyIjoiNjciLCIzIjoiNjciLCI0IjoiNzEiLCI1IjoiNzIiLCI2IjoiNjYiLCI3IjoiNjIiLCI4IjoiNjEiLCI5IjoiNjAiLCIxMCI6IjU5IiwiMTEiOiI0OCIsIjEyIjoiNTMiLCIxMyI6IjY1IiwiMTQiOiI0NyIsIjE1IjoiMzEifX0sImRjIjp7InVubCI6dHJ1ZSwibWF0dGVyIjoiOC4xNDA3MTEyOTAxNTI1MDJlOTY1IiwiZW5lcmd5IjoiNC41MjE4MzAyODcxOTQ0MjI1ZTkxMSIsImZsdWlkIjoiMS4wMzAwOTk3NTAzNDE2MDg3ZTg5NyIsImNvcmVzIjoiMjQyIn0sImluZiI6eyJ1bmwiOnRydWUsImJlc3REaXN0IjoiNS45NjIwNTUzNjAxNDk0ODdlMzQ0NDU3OTQiLCJlbmRvcnNlbWVudHMiOiI2NSIsImtub3dsZWRnZSI6IjQuMDc0MDA1NDM3NDY1NTJlMjY0IiwidXBncmFkZXMiOlsiMTsxIiwiMTsyIiwiMTszIiwiMjsxIiwiMjsyIiwiMjszIiwiMzsxIiwiMzsyIiwiMzszIiwiNDsxIiwiNDsyIiwiNDszIiwiNDs0IiwiNDs1IiwiNTsxIiwiNTsyIiwiNTszIiwiNTs0IiwiNTs1IiwiNjsxIiwiNjsyIiwiNjszIiwiNjs0IiwiNjs1IiwiMTs0IiwiMTs1IiwiMTs2IiwiMjs0IiwiMjs1IiwiMjs2IiwiMzs0IiwiMzs1IiwiMzs2IiwiNDs2IiwiNTs2IiwiNjs2IiwiMTs3IiwiMjs3IiwiMzs3IiwiNDs3IiwiNTs3IiwiNjs3IiwiNzsxIiwiNzsyIiwiNzszIiwiNzs0IiwiNzs1IiwiNzs2IiwiNzs3IiwiMTs4IiwiMjs4IiwiMzs4IiwiNDs4IiwiNTs4IiwiNjs4IiwiNzs4IiwiODsxIiwiODsyIiwiODszIiwiODs0IiwiODs1IiwiODs2IiwiODs3IiwiODs4IiwiOTsxIiwiOTsyIiwiOTszIiwiOTs0IiwiOTs1IiwiOTs2IiwiOTs3IiwiOTs4IiwiMTs5IiwiMjs5IiwiMzs5IiwiNDs5IiwiNTs5IiwiNjs5IiwiNzs5IiwiODs5IiwiOTs5IiwiMTsxMCIsIjEwOzEiLCIyOzEwIiwiMzsxMCIsIjQ7MTAiLCIxMDsyIiwiMTA7MyIsIjEwOzQiLCI1OzEwIiwiNjsxMCIsIjc7MTAiLCI4OzEwIiwiOTsxMCIsIjEwOzUiLCIxMDs2IiwiMTA7NyIsIjEwOzgiLCIxMDs5IiwiMTA7MTAiXSwiYXNjZW5zaW9uIjp7InRpbWUiOlsiMjMuMjEyMDAwMDAwMDAwMDAzIiwiMjMuMjEyMDAwMDAwMDAwMDAzIiwiMjMuMjEyMDAwMDAwMDAwMDAzIiwiMjMuMjEyMDAwMDAwMDAwMDAzIl0sImVubGlnaHRlbm1lbnRzIjpbIjExIiwiMTEiLCIxMSIsIjExIl0sInBvd2VyIjoiMi44ODkyNTU5ODIxMDYxMzRlMzQifSwic3RhZGl1bSI6eyJjdXJyZW50IjoiIiwiY29tcGxldGlvbnMiOlsiZXRlcm5pdHkiLCJkcmlnZ2FuaXoiLCJzcGFjZW9uIiwiaW5maW5pdHkiLCJzb2xhcmlzIiwicmVhbGl0eSJdfSwicGFudGhlb24iOnsiZ2VtcyI6IjAiLCJhbmdlbHMiOiIzIiwiZGVtb25zIjoiMyIsImhlYXZlbmx5Q2hpcHMiOiI2LjI2ODk2OTM3NzkzNzg5N2UyOCIsImRlbW9uaWNTb3VscyI6IjEuNzczNTE3MTAwMTE2OTMzNmUyOSIsImhhdW50aW5nRW5lcmd5IjoiMCIsInB1cmdlIjp7InVubCI6dHJ1ZSwiYWN0aXZlIjpmYWxzZSwicG93ZXIiOiIyOTA2In19LCJkZXJpdmF0aXZlcyI6eyJ1bmwiOnRydWUsImFtdHMiOnsiYWNjZWxlcmF0aW9uIjoiNC4zNDc1NDI1Mjk0Njg0Nzk1ZTQ2NDA3OTQiLCJqZXJrIjoiMy4zNjQ5Nzk1MzcxODI5NzRlMjUwNDU0NiIsInNuYXAiOiI5LjgyMzExMzk2NTQ1NDE0NmUzNjgxNTkifSwidW5sb2NrcyI6IjgifX0sImF1dG9tYXRvcnMiOnsiZnVybmFjZSI6ZmFsc2UsInBhdGhvZ2VucyI6dHJ1ZSwiY29yZXMiOnRydWUsInJvYm90cyI6dHJ1ZSwiaW5maW5pdHlfdXBncmFkZXMiOnRydWUsImVuZG9yc2VtZW50cyI6dHJ1ZSwicGVya3MiOnRydWUsImVubGlnaHRlbm1lbnRzIjp0cnVlLCJzcGVjdHJhbF9nZW1zIjp0cnVlLCJkZXJpdmF0aXZlX2Jvb3N0cyI6dHJ1ZSwiZWxlbWVudGFyaWVzIjpmYWxzZSwicGhvdG9uX3VwZ3JhZGVzIjp0cnVlLCJnbHVvbl91cGdyYWRlcyI6dHJ1ZSwidHJlZV91cGdyYWRlcyI6ZmFsc2UsInRoZW9yaXZlcnNlIjpmYWxzZSwidGhlb3JldGljYWxfYm9vc3RlcnMiOmZhbHNlLCJmb2FtX3VubG9ja3MiOmZhbHNlLCJlbnRyb3B5IjpmYWxzZSwiZW50cm9weV91cGdyYWRlcyI6ZmFsc2UsInBpb25fZmllbGQiOmZhbHNlLCJzcGlub3JfZmllbGQiOmZhbHNlLCJtdWx0aXZlcnNlX3J1bnMiOmZhbHNlLCJtYWdtYSI6ZmFsc2UsInBsYXNtYSI6ZmFsc2V9LCJhdXRvTW9kZXMiOnsiZWxlbWVudGFyaWVzIjoiQU1PVU5UIiwibXVsdGl2ZXJzZV9ydW5zIjoiQU1PVU5UIn0sImF1dG9UeHQiOnsiZWxlbWVudGFyaWVzIjoiMCIsIm11bHRpdmVyc2VfcnVucyI6IjAifSwiZWxlbWVudGFyeSI6eyJ0aW1lIjoiNy42MDA5OTk5OTk5OTk5OTgiLCJ0aW1lcyI6IjE2OSIsInBhcnRpY2xlcyI6IjAiLCJmZXJtaW9ucyI6eyJhbW91bnQiOiI0NjA3NjMiLCJxdWFya3MiOnsiYW1vdW50IjoiOS41MDE1MDM5MzYzMDUxMjRlMjgiLCJ0eXBlIjozfSwibGVwdG9ucyI6eyJhbW91bnQiOiIxLjA2NjYzMDQ2NTQ1NTkxMThlMjgiLCJ0eXBlIjoyfX0sImJvc29ucyI6eyJhbW91bnQiOiIxODczOTg3IiwiZ2F1Z2UiOnsiYW1vdW50IjoiNDI5ODU2NDcxLjExOTMwMDM3IiwiZm9yY2UiOiIxNDgwNjQ0NjQuOTM1MTUyMSIsInBob3RvbnMiOnsiYW1vdW50IjoiMi4wNjczNTMwNTEwODM3Mzc1ZTE5IiwidXBncmFkZXMiOlsiNiIsIjYiLCIxNyIsIjI0Il19LCJ3IjoiMjU2LjA5ODU0NDM0Mzg3NTg2IiwieiI6IjE3My4zMjE5NzU0ODQ3NzE0MyIsImdsdW9ucyI6eyJyIjp7ImFtb3VudCI6IjIyOTQ4ODc4Ni44NzQyMzE0IiwidXBncmFkZXMiOlsiMyIsIjMiLCIyIl19LCJnIjp7ImFtb3VudCI6IjIyMDY2MjI5NS4wNzEzNzYyNiIsInVwZ3JhZGVzIjpbIjMiLCIzIiwiMiJdfSwiYiI6eyJhbW91bnQiOiIyMzkwNTA4MTkuNjYwNjU3NjQiLCJ1cGdyYWRlcyI6WyIzIiwiMyIsIjIiXX0sImFyIjp7ImFtb3VudCI6IjU3MzcyMTk2LjcxODU1Nzg1IiwidXBncmFkZXMiOlsiMyIsIjMiLCIyIl19LCJhZyI6eyJhbW91bnQiOiI1ODU0MzA1Ny44NzYwNzk0MjUiLCJ1cGdyYWRlcyI6WyIzIiwiMyIsIjIiXX0sImFiIjp7ImFtb3VudCI6IjU2MjQ3MjUxLjY4NDg2MDYyIiwidXBncmFkZXMiOlsiMyIsIjMiLCIyIl19fSwiZ3Jhdml0b25zIjoiNi41MTA3NzQ3ODk5NjM3NzFlMTkifSwic2NhbGFyIjp7ImFtb3VudCI6IjYyNDMuMTcxNTY2OTc2MTUyIiwiaGlnZ3MiOnsiYW1vdW50IjoiNS43NDA5OTIzNTIwNTg5NzRlMTYiLCJ1cGdyYWRlcyI6WyIwOzA7MCIsIjA7MDsxIiwiMDsxOzEiLCIwOzE7MCIsIjE7MDswIiwiMTswOzEiLCIyOzA7MCIsIjA7MjswIiwiMDswOzIiLCIxOzE7MCIsIjM7MDswIiwiMDswOzMiLCIxOzI7MCIsIjA7MjsxIiwiNDswOzAiLCIwOzA7NCIsIjE7MzswIiwiMDszOzEiXX19fSwidGhlb3J5Ijp7InVubCI6dHJ1ZSwiYWN0aXZlIjpmYWxzZSwicG9pbnRzIjoiMjE4IiwiZGVwdGgiOiI3IiwiYmVzdERlcHRoIjoiNyIsInN1cGVyc3ltbWV0cnkiOnsidW5sIjp0cnVlLCJzcXVhcmtzIjoiMi41ODY0NDU4MTIzNDYwOTdlMzMiLCJzbGVwdG9ucyI6IjkuNDY4NTQzMDkyMjExODE5ZTMxIiwibmV1dHJhbGlub3MiOiI5LjYzMTY1ODM4ODg1MDI2MmUyNyIsImNoYXJnaW5vcyI6IjIuMzk1ODY5NzU5MzE5MzUzZTE2In0sInRyZWUiOnsidW5sIjp0cnVlLCJzcGVudCI6IjQ1NCIsInVwZ3JhZGVzIjp7IjciOiI1IiwiMTEiOiI1IiwiMTMiOiIxIiwiMjUiOiIxIiwiMjciOiIxIn19LCJzdHJpbmdzIjp7InVubCI6dHJ1ZSwiYW1vdW50cyI6WyIxLjQ2MjU4MzAzNDgwOTg0NzRlNDEiLCIxLjEyODI4OTEyMDU5NjI5MjZlMzMiLCIyLjE4NDUwNTMzMzQzMjA0NWUyOCIsIjEuMjU0MzY1OTEyNjU4ODgyZTI3IiwiNC4wOTEwMTkzMzkxNTA1MjJlMjUiLCIxLjc5Nzg4NTU3NDE3MjY5OWUyNCIsIjIuNjc0OTE2NjY4NTc0MzMxNWUxNyIsIjAiLCIwIiwiMCJdLCJlbnRhbmdsZWQiOiIxMTAzNjY3OTQwNzUuNDM2ODYifSwicHJlb25zIjp7InVubCI6dHJ1ZSwiYW1vdW50IjoiMzIzMTk4Ny4wNjYzODk4NTIiLCJib29zdGVycyI6IjMyIn0sImFjY2VsZXJvbnMiOnsidW5sIjp0cnVlLCJhbW91bnQiOiIzMjA3LjIyOTY4ODUxOTQyNCIsImV4cGFuZGVycyI6IjUifSwiaW5mbGF0b25zIjp7InVubCI6ZmFsc2UsImFtb3VudCI6IjAifX0sImhjIjp7InVubCI6dHJ1ZSwiYWN0aXZlIjpmYWxzZSwiYmVzdCI6IjAiLCJoYWRyb25zIjoiMCIsImNsYWltZWQiOiIwIiwic2VsZWN0b3JzIjp7ImdvYWwiOnsiYXJyYXkiOlszMDguMjU0NzE1NTU5OTE2NzUsMV0sInNpZ24iOjF9LCJnb2FsTWx0IjpmYWxzZSwicm9ja2V0cyI6ZmFsc2UsInJmIjpmYWxzZSwibm9UUlUiOmZhbHNlLCJub0NhZCI6ZmFsc2UsIm5vUFUiOmZhbHNlLCJub0RDIjpmYWxzZSwibm9JVSI6ZmFsc2UsInNwYWNlb24iOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sInNvbGFyaXMiOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sImluZmluaXR5Ijp7ImFycmF5IjpbMF0sInNpZ24iOjF9LCJldGVybml0eSI6eyJhcnJheSI6WzBdLCJzaWduIjoxfSwicmVhbGl0eSI6eyJhcnJheSI6WzBdLCJzaWduIjoxfSwiZHJpZ2dhbml6Ijp7ImFycmF5IjpbMF0sInNpZ24iOjF9LCJmbGFtaXMiOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sImNyYW5pdXMiOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sInNwZWN0cmEiOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sImFxdWFsb24iOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sIm51bGx1bSI6eyJhcnJheSI6WzBdLCJzaWduIjoxfSwicXVhbnRyb24iOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sIm5vR2VtcyI6ZmFsc2UsInB1cmdlIjpmYWxzZSwibm9EUyI6ZmFsc2UsIm5vREIiOmZhbHNlLCJlbG0iOmZhbHNlLCJmZXJtYm9zIjpmYWxzZSwidHYiOnsiYXJyYXkiOlsxXSwic2lnbiI6LTF9LCJzcHJzeW0iOmZhbHNlLCJ0cmVlIjpmYWxzZSwic3RyaW5nIjp7ImFycmF5IjpbMF0sInNpZ24iOjF9LCJwcmVvbnRiIjpmYWxzZSwiYWNscm9uIjpmYWxzZSwiZGUiOnsiYXJyYXkiOlswXSwic2lnbiI6MX0sImluZmwiOmZhbHNlLCJyZnJtIjp7ImFycmF5IjpbMF0sInNpZ24iOjF9LCJldHJweSI6ZmFsc2UsInNreSI6ZmFsc2UsInExIjpmYWxzZSwicTIiOmZhbHNlLCJxMyI6ZmFsc2UsIm1sdDEiOmZhbHNlLCJtbHQyIjpmYWxzZSwibWx0MyI6ZmFsc2UsIm1sdDQiOmZhbHNlLCJtbHQ1IjpmYWxzZX19LCJmb2FtIjp7InVubCI6ZmFsc2UsImFtb3VudHMiOlsiMCIsIjAiLCIwIiwiMCIsIjAiXSwibWF4RGVwdGgiOiIxIiwidXBncmFkZXMiOlsiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIiwiMCIsIjAiLCIwIl0sImF1dG9VbmwiOltmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV19LCJlbnRyb3B5Ijp7InVubCI6ZmFsc2UsImJlc3REZXB0aCI6IjEiLCJhbW91bnQiOiIwIiwiYmVzdCI6IjAiLCJ1cGdyYWRlcyI6W119LCJza3kiOnsidW5sIjpmYWxzZSwiYW1vdW50IjoiMCIsInBpb25zIjp7ImFtb3VudCI6IjAiLCJmaWVsZCI6e319LCJzcGlub3JzIjp7ImFtb3VudCI6IjAiLCJmaWVsZCI6e319fX0sIm1sdCI6eyJ0aW1lcyI6IjAiLCJlbmVyZ3kiOiIwIiwiYmVzdEVuZXJneSI6IjAiLCJ0b3RhbEVuZXJneSI6IjAiLCJoaWdoZXN0Q29tcGxldGVkIjowLCJoaWdoZXN0VW5sb2NrZWQiOjAsImFjdGl2ZSI6MCwicXVpbHRVcGdzIjpbIjAiLCIwIiwiMCJdLCJtbHQxc2VsZWN0ZWQiOltdLCJtbHQzc2VsZWN0ZWQiOltdfX0=',
    name: 'Hadronic challenge',
    group: 'elementary',
    author:  'Wrab',
  },
]
showSaves()