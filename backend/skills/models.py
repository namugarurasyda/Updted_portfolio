from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=50)
    level = models.IntegerField(help_text="Enter percentage (e.g. 90 for 90%)")

    def __str__(self):
        return f"{self.name} - {self.level}%"