from django.db import models


class PublicationTab(models.Model):
    """Модель вкладки публикаций"""
    title = models.CharField(verbose_name="Название", max_length=255)

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = "вкладка публикаций"
        verbose_name_plural = "вкладки публикаций"

    

class Publication(models.Model):
    """Модель публикации"""
    tab = models.ForeignKey(verbose_name="Вкладка", to='publications.PublicationTab', on_delete=models.CASCADE)
    title = models.TextField(verbose_name="Заголовок")
    link = models.URLField(verbose_name="Ссылка")
    image = models.FileField(verbose_name="Изображение", upload_to='publications/')

    def __str__(self):
        return self.title
    
    class Meta: 
        verbose_name = "публикация"
        verbose_name_plural = "публикации"