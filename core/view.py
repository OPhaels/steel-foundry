from django.shortcuts import render

def home(request):
    horas = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"]
    return render(request, 'index.html', {"horas" : horas, "timestamp": request.GET.get('v', '')})
